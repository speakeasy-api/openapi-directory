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
exports.UpdateTaskRequest = void 0;
var utils_1 = require("../../../internal/utils");
var filterrule_1 = require("./filterrule");
var options_1 = require("./options");
var taskschedule_1 = require("./taskschedule");
// UpdateTaskRequest
/**
 * UpdateTaskResponse
**/
var UpdateTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskRequest, _super);
    function UpdateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CloudWatchLogGroupArn" }),
        __metadata("design:type", String)
    ], UpdateTaskRequest.prototype, "cloudWatchLogGroupArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Excludes", elemType: filterrule_1.FilterRule }),
        __metadata("design:type", Array)
    ], UpdateTaskRequest.prototype, "excludes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Includes", elemType: filterrule_1.FilterRule }),
        __metadata("design:type", Array)
    ], UpdateTaskRequest.prototype, "includes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateTaskRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Options" }),
        __metadata("design:type", options_1.Options)
    ], UpdateTaskRequest.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Schedule" }),
        __metadata("design:type", taskschedule_1.TaskSchedule)
    ], UpdateTaskRequest.prototype, "schedule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaskArn" }),
        __metadata("design:type", String)
    ], UpdateTaskRequest.prototype, "taskArn", void 0);
    return UpdateTaskRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateTaskRequest = UpdateTaskRequest;
