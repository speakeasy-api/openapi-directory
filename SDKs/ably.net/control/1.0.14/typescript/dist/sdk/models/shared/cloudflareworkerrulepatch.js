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
exports.CloudflareWorkerRulePatch = exports.CloudflareWorkerRulePatchTarget = exports.CloudflareWorkerRulePatchTargetHeaders = exports.CloudflareWorkerRulePatchStatusEnum = exports.CloudflareWorkerRulePatchRuleTypeEnum = exports.CloudflareWorkerRulePatchRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var CloudflareWorkerRulePatchRequestModeEnum;
(function (CloudflareWorkerRulePatchRequestModeEnum) {
    CloudflareWorkerRulePatchRequestModeEnum["Single"] = "single";
    CloudflareWorkerRulePatchRequestModeEnum["Batch"] = "batch";
})(CloudflareWorkerRulePatchRequestModeEnum = exports.CloudflareWorkerRulePatchRequestModeEnum || (exports.CloudflareWorkerRulePatchRequestModeEnum = {}));
var CloudflareWorkerRulePatchRuleTypeEnum;
(function (CloudflareWorkerRulePatchRuleTypeEnum) {
    CloudflareWorkerRulePatchRuleTypeEnum["HttpCloudflareWorker"] = "http/cloudflare-worker";
})(CloudflareWorkerRulePatchRuleTypeEnum = exports.CloudflareWorkerRulePatchRuleTypeEnum || (exports.CloudflareWorkerRulePatchRuleTypeEnum = {}));
var CloudflareWorkerRulePatchStatusEnum;
(function (CloudflareWorkerRulePatchStatusEnum) {
    CloudflareWorkerRulePatchStatusEnum["Enabled"] = "enabled";
    CloudflareWorkerRulePatchStatusEnum["Disabled"] = "disabled";
})(CloudflareWorkerRulePatchStatusEnum = exports.CloudflareWorkerRulePatchStatusEnum || (exports.CloudflareWorkerRulePatchStatusEnum = {}));
var CloudflareWorkerRulePatchTargetHeaders = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRulePatchTargetHeaders, _super);
    function CloudflareWorkerRulePatchTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePatchTargetHeaders.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePatchTargetHeaders.prototype, "value", void 0);
    return CloudflareWorkerRulePatchTargetHeaders;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRulePatchTargetHeaders = CloudflareWorkerRulePatchTargetHeaders;
var CloudflareWorkerRulePatchTarget = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRulePatchTarget, _super);
    function CloudflareWorkerRulePatchTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: CloudflareWorkerRulePatchTargetHeaders }),
        __metadata("design:type", Array)
    ], CloudflareWorkerRulePatchTarget.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePatchTarget.prototype, "signingKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePatchTarget.prototype, "url", void 0);
    return CloudflareWorkerRulePatchTarget;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRulePatchTarget = CloudflareWorkerRulePatchTarget;
var CloudflareWorkerRulePatch = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRulePatch, _super);
    function CloudflareWorkerRulePatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePatch.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePatch.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], CloudflareWorkerRulePatch.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePatch.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", CloudflareWorkerRulePatchTarget)
    ], CloudflareWorkerRulePatch.prototype, "target", void 0);
    return CloudflareWorkerRulePatch;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRulePatch = CloudflareWorkerRulePatch;
