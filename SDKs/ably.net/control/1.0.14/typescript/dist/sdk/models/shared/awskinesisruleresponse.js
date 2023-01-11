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
exports.AwsKinesisRuleResponse = exports.AwsKinesisRuleResponseTarget = exports.AwsKinesisRuleResponseTargetFormatEnum = exports.AwsKinesisRuleResponseStatusEnum = exports.AwsKinesisRuleResponseRuleTypeEnum = exports.AwsKinesisRuleResponseRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var AwsKinesisRuleResponseRequestModeEnum;
(function (AwsKinesisRuleResponseRequestModeEnum) {
    AwsKinesisRuleResponseRequestModeEnum["Single"] = "single";
})(AwsKinesisRuleResponseRequestModeEnum = exports.AwsKinesisRuleResponseRequestModeEnum || (exports.AwsKinesisRuleResponseRequestModeEnum = {}));
var AwsKinesisRuleResponseRuleTypeEnum;
(function (AwsKinesisRuleResponseRuleTypeEnum) {
    AwsKinesisRuleResponseRuleTypeEnum["AwsKinesis"] = "aws/kinesis";
})(AwsKinesisRuleResponseRuleTypeEnum = exports.AwsKinesisRuleResponseRuleTypeEnum || (exports.AwsKinesisRuleResponseRuleTypeEnum = {}));
var AwsKinesisRuleResponseStatusEnum;
(function (AwsKinesisRuleResponseStatusEnum) {
    AwsKinesisRuleResponseStatusEnum["Enabled"] = "enabled";
    AwsKinesisRuleResponseStatusEnum["Disabled"] = "disabled";
})(AwsKinesisRuleResponseStatusEnum = exports.AwsKinesisRuleResponseStatusEnum || (exports.AwsKinesisRuleResponseStatusEnum = {}));
var AwsKinesisRuleResponseTargetFormatEnum;
(function (AwsKinesisRuleResponseTargetFormatEnum) {
    AwsKinesisRuleResponseTargetFormatEnum["Json"] = "json";
})(AwsKinesisRuleResponseTargetFormatEnum = exports.AwsKinesisRuleResponseTargetFormatEnum || (exports.AwsKinesisRuleResponseTargetFormatEnum = {}));
var AwsKinesisRuleResponseTarget = /** @class */ (function (_super) {
    __extends(AwsKinesisRuleResponseTarget, _super);
    function AwsKinesisRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication" }),
        __metadata("design:type", Object)
    ], AwsKinesisRuleResponseTarget.prototype, "authentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AwsKinesisRuleResponseTarget.prototype, "enveloped", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponseTarget.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=partitionKey" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponseTarget.prototype, "partitionKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponseTarget.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamName" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponseTarget.prototype, "streamName", void 0);
    return AwsKinesisRuleResponseTarget;
}(utils_1.SpeakeasyBase));
exports.AwsKinesisRuleResponseTarget = AwsKinesisRuleResponseTarget;
var AwsKinesisRuleResponse = /** @class */ (function (_super) {
    __extends(AwsKinesisRuleResponse, _super);
    function AwsKinesisRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", Object)
    ], AwsKinesisRuleResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], AwsKinesisRuleResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], AwsKinesisRuleResponse.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], AwsKinesisRuleResponse.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", AwsKinesisRuleResponseTarget)
    ], AwsKinesisRuleResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], AwsKinesisRuleResponse.prototype, "version", void 0);
    return AwsKinesisRuleResponse;
}(utils_1.SpeakeasyBase));
exports.AwsKinesisRuleResponse = AwsKinesisRuleResponse;
