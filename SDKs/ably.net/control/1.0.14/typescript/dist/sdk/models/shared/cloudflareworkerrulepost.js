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
exports.CloudflareWorkerRulePost = exports.CloudflareWorkerRulePostTarget = exports.CloudflareWorkerRulePostTargetHeaders = exports.CloudflareWorkerRulePostStatusEnum = exports.CloudflareWorkerRulePostRuleTypeEnum = exports.CloudflareWorkerRulePostRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var CloudflareWorkerRulePostRequestModeEnum;
(function (CloudflareWorkerRulePostRequestModeEnum) {
    CloudflareWorkerRulePostRequestModeEnum["Single"] = "single";
    CloudflareWorkerRulePostRequestModeEnum["Batch"] = "batch";
})(CloudflareWorkerRulePostRequestModeEnum = exports.CloudflareWorkerRulePostRequestModeEnum || (exports.CloudflareWorkerRulePostRequestModeEnum = {}));
var CloudflareWorkerRulePostRuleTypeEnum;
(function (CloudflareWorkerRulePostRuleTypeEnum) {
    CloudflareWorkerRulePostRuleTypeEnum["HttpCloudflareWorker"] = "http/cloudflare-worker";
})(CloudflareWorkerRulePostRuleTypeEnum = exports.CloudflareWorkerRulePostRuleTypeEnum || (exports.CloudflareWorkerRulePostRuleTypeEnum = {}));
var CloudflareWorkerRulePostStatusEnum;
(function (CloudflareWorkerRulePostStatusEnum) {
    CloudflareWorkerRulePostStatusEnum["Enabled"] = "enabled";
    CloudflareWorkerRulePostStatusEnum["Disabled"] = "disabled";
})(CloudflareWorkerRulePostStatusEnum = exports.CloudflareWorkerRulePostStatusEnum || (exports.CloudflareWorkerRulePostStatusEnum = {}));
var CloudflareWorkerRulePostTargetHeaders = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRulePostTargetHeaders, _super);
    function CloudflareWorkerRulePostTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePostTargetHeaders.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePostTargetHeaders.prototype, "value", void 0);
    return CloudflareWorkerRulePostTargetHeaders;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRulePostTargetHeaders = CloudflareWorkerRulePostTargetHeaders;
var CloudflareWorkerRulePostTarget = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRulePostTarget, _super);
    function CloudflareWorkerRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: CloudflareWorkerRulePostTargetHeaders }),
        __metadata("design:type", Array)
    ], CloudflareWorkerRulePostTarget.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePostTarget.prototype, "signingKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePostTarget.prototype, "url", void 0);
    return CloudflareWorkerRulePostTarget;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRulePostTarget = CloudflareWorkerRulePostTarget;
var CloudflareWorkerRulePost = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRulePost, _super);
    function CloudflareWorkerRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePost.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePost.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], CloudflareWorkerRulePost.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRulePost.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", CloudflareWorkerRulePostTarget)
    ], CloudflareWorkerRulePost.prototype, "target", void 0);
    return CloudflareWorkerRulePost;
}(utils_1.SpeakeasyBase));
exports.CloudflareWorkerRulePost = CloudflareWorkerRulePost;
