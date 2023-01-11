"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRunRequest = void 0;
var utils_1 = require("../../../internal/utils");
var schedulerunconfiguration_1 = require("./schedulerunconfiguration");
var deviceselectionconfiguration_1 = require("./deviceselectionconfiguration");
var executionconfiguration_1 = require("./executionconfiguration");
var scheduleruntest_1 = require("./scheduleruntest");
// ScheduleRunRequest
/**
 * Represents a request to the schedule run operation.
**/
var ScheduleRunRequest = /** @class */ (function (_super) {
    __extends(ScheduleRunRequest, _super);
    function ScheduleRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appArn" }),
        __metadata("design:type", String)
    ], ScheduleRunRequest.prototype, "appArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configuration" }),
        __metadata("design:type", schedulerunconfiguration_1.ScheduleRunConfiguration)
    ], ScheduleRunRequest.prototype, "configuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devicePoolArn" }),
        __metadata("design:type", String)
    ], ScheduleRunRequest.prototype, "devicePoolArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceSelectionConfiguration" }),
        __metadata("design:type", deviceselectionconfiguration_1.DeviceSelectionConfiguration)
    ], ScheduleRunRequest.prototype, "deviceSelectionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionConfiguration" }),
        __metadata("design:type", executionconfiguration_1.ExecutionConfiguration)
    ], ScheduleRunRequest.prototype, "executionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ScheduleRunRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectArn" }),
        __metadata("design:type", String)
    ], ScheduleRunRequest.prototype, "projectArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=test" }),
        __metadata("design:type", scheduleruntest_1.ScheduleRunTest)
    ], ScheduleRunRequest.prototype, "test", void 0);
    return ScheduleRunRequest;
}(utils_1.SpeakeasyBase));
exports.ScheduleRunRequest = ScheduleRunRequest;
