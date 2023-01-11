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
exports.CreateRobotApplicationVersionResponse = void 0;
var utils_1 = require("../../../internal/utils");
var environment_1 = require("./environment");
var robotsoftwaresuite_1 = require("./robotsoftwaresuite");
var source_1 = require("./source");
var CreateRobotApplicationVersionResponse = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationVersionResponse, _super);
    function CreateRobotApplicationVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionResponse.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", environment_1.Environment)
    ], CreateRobotApplicationVersionResponse.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], CreateRobotApplicationVersionResponse.prototype, "lastUpdatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionResponse.prototype, "revisionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robotSoftwareSuite" }),
        __metadata("design:type", robotsoftwaresuite_1.RobotSoftwareSuite)
    ], CreateRobotApplicationVersionResponse.prototype, "robotSoftwareSuite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources", elemType: source_1.Source }),
        __metadata("design:type", Array)
    ], CreateRobotApplicationVersionResponse.prototype, "sources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationVersionResponse.prototype, "version", void 0);
    return CreateRobotApplicationVersionResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRobotApplicationVersionResponse = CreateRobotApplicationVersionResponse;
