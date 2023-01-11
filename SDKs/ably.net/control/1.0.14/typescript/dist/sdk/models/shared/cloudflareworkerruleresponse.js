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
exports.CloudflareWorkerRuleResponse = exports.CloudflareWorkerRuleResponseTarget = exports.CloudflareWorkerRuleResponseTargetHeaders = exports.CloudflareWorkerRuleResponseStatusEnum = exports.CloudflareWorkerRuleResponseRuleTypeEnum = exports.CloudflareWorkerRuleResponseRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var CloudflareWorkerRuleResponseRequestModeEnum;
(function (CloudflareWorkerRuleResponseRequestModeEnum) {
    CloudflareWorkerRuleResponseRequestModeEnum["Single"] = "single";
    CloudflareWorkerRuleResponseRequestModeEnum["Batch"] = "batch";
})(CloudflareWorkerRuleResponseRequestModeEnum = exports.CloudflareWorkerRuleResponseRequestModeEnum || (exports.CloudflareWorkerRuleResponseRequestModeEnum = {}));
var CloudflareWorkerRuleResponseRuleTypeEnum;
(function (CloudflareWorkerRuleResponseRuleTypeEnum) {
    CloudflareWorkerRuleResponseRuleTypeEnum["HttpCloudflareWorker"] = "http/cloudflare-worker";
})(CloudflareWorkerRuleResponseRuleTypeEnum = exports.CloudflareWorkerRuleResponseRuleTypeEnum || (exports.CloudflareWorkerRuleResponseRuleTypeEnum = {}));
var CloudflareWorkerRuleResponseStatusEnum;
(function (CloudflareWorkerRuleResponseStatusEnum) {
    CloudflareWorkerRuleResponseStatusEnum["Enabled"] = "enabled";
    CloudflareWorkerRuleResponseStatusEnum["Disabled"] = "disabled";
})(CloudflareWorkerRuleResponseStatusEnum = exports.CloudflareWorkerRuleResponseStatusEnum || (exports.CloudflareWorkerRuleResponseStatusEnum = {}));
var CloudflareWorkerRuleResponseTargetHeaders = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRuleResponseTargetHeaders, _super);
    function CloudflareWorkerRuleResponseTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponseTargetHeaders.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponseTargetHeaders.prototype, "value", void 0);
    return CloudflareWorkerRuleResponseTargetHeaders;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRuleResponseTargetHeaders = CloudflareWorkerRuleResponseTargetHeaders;
var CloudflareWorkerRuleResponseTarget = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRuleResponseTarget, _super);
    function CloudflareWorkerRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: CloudflareWorkerRuleResponseTargetHeaders }),
        __metadata("design:type", Array)
    ], CloudflareWorkerRuleResponseTarget.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponseTarget.prototype, "signingKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponseTarget.prototype, "url", void 0);
    return CloudflareWorkerRuleResponseTarget;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRuleResponseTarget = CloudflareWorkerRuleResponseTarget;
var CloudflareWorkerRuleResponse = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRuleResponse, _super);
    function CloudflareWorkerRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", Object)
    ], CloudflareWorkerRuleResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], CloudflareWorkerRuleResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], CloudflareWorkerRuleResponse.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], CloudflareWorkerRuleResponse.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", CloudflareWorkerRuleResponseTarget)
    ], CloudflareWorkerRuleResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "version", void 0);
    return CloudflareWorkerRuleResponse;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRuleResponse = CloudflareWorkerRuleResponse;
