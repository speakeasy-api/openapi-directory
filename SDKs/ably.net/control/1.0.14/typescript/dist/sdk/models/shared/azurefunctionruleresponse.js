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
exports.AzureFunctionRuleResponse = exports.AzureFunctionRuleResponseTarget = exports.AzureFunctionRuleResponseTargetHeaders = exports.AzureFunctionRuleResponseTargetFormatEnum = exports.AzureFunctionRuleResponseStatusEnum = exports.AzureFunctionRuleResponseRuleTypeEnum = exports.AzureFunctionRuleResponseRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var AzureFunctionRuleResponseRequestModeEnum;
(function (AzureFunctionRuleResponseRequestModeEnum) {
    AzureFunctionRuleResponseRequestModeEnum["Single"] = "single";
    AzureFunctionRuleResponseRequestModeEnum["Batch"] = "batch";
})(AzureFunctionRuleResponseRequestModeEnum = exports.AzureFunctionRuleResponseRequestModeEnum || (exports.AzureFunctionRuleResponseRequestModeEnum = {}));
var AzureFunctionRuleResponseRuleTypeEnum;
(function (AzureFunctionRuleResponseRuleTypeEnum) {
    AzureFunctionRuleResponseRuleTypeEnum["HttpAzureFunction"] = "http/azure-function";
})(AzureFunctionRuleResponseRuleTypeEnum = exports.AzureFunctionRuleResponseRuleTypeEnum || (exports.AzureFunctionRuleResponseRuleTypeEnum = {}));
var AzureFunctionRuleResponseStatusEnum;
(function (AzureFunctionRuleResponseStatusEnum) {
    AzureFunctionRuleResponseStatusEnum["Enabled"] = "enabled";
    AzureFunctionRuleResponseStatusEnum["Disabled"] = "disabled";
})(AzureFunctionRuleResponseStatusEnum = exports.AzureFunctionRuleResponseStatusEnum || (exports.AzureFunctionRuleResponseStatusEnum = {}));
var AzureFunctionRuleResponseTargetFormatEnum;
(function (AzureFunctionRuleResponseTargetFormatEnum) {
    AzureFunctionRuleResponseTargetFormatEnum["Json"] = "json";
})(AzureFunctionRuleResponseTargetFormatEnum = exports.AzureFunctionRuleResponseTargetFormatEnum || (exports.AzureFunctionRuleResponseTargetFormatEnum = {}));
var AzureFunctionRuleResponseTargetHeaders = /** @class */ (function (_super) {
    __extends(AzureFunctionRuleResponseTargetHeaders, _super);
    function AzureFunctionRuleResponseTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponseTargetHeaders.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponseTargetHeaders.prototype, "value", void 0);
    return AzureFunctionRuleResponseTargetHeaders;
}(utils_1.SpeakeasyBase));
exports.AzureFunctionRuleResponseTargetHeaders = AzureFunctionRuleResponseTargetHeaders;
var AzureFunctionRuleResponseTarget = /** @class */ (function (_super) {
    __extends(AzureFunctionRuleResponseTarget, _super);
    function AzureFunctionRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=azureAppId" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponseTarget.prototype, "azureAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=azureFunctionName" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponseTarget.prototype, "azureFunctionName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AzureFunctionRuleResponseTarget.prototype, "enveloped", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponseTarget.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: AzureFunctionRuleResponseTargetHeaders }),
        __metadata("design:type", Array)
    ], AzureFunctionRuleResponseTarget.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponseTarget.prototype, "signingKeyId", void 0);
    return AzureFunctionRuleResponseTarget;
}(utils_1.SpeakeasyBase));
exports.AzureFunctionRuleResponseTarget = AzureFunctionRuleResponseTarget;
var AzureFunctionRuleResponse = /** @class */ (function (_super) {
    __extends(AzureFunctionRuleResponse, _super);
    function AzureFunctionRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", Object)
    ], AzureFunctionRuleResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], AzureFunctionRuleResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], AzureFunctionRuleResponse.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], AzureFunctionRuleResponse.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", AzureFunctionRuleResponseTarget)
    ], AzureFunctionRuleResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], AzureFunctionRuleResponse.prototype, "version", void 0);
    return AzureFunctionRuleResponse;
}(utils_1.SpeakeasyBase));
exports.AzureFunctionRuleResponse = AzureFunctionRuleResponse;
