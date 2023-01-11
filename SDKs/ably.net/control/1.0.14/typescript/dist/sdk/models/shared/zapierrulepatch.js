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
exports.ZapierRulePatch = exports.ZapierRulePatchTarget = exports.ZapierRulePatchTargetHeaders = exports.ZapierRulePatchStatusEnum = exports.ZapierRulePatchRuleTypeEnum = exports.ZapierRulePatchRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var ZapierRulePatchRequestModeEnum;
(function (ZapierRulePatchRequestModeEnum) {
    ZapierRulePatchRequestModeEnum["Single"] = "single";
    ZapierRulePatchRequestModeEnum["Batch"] = "batch";
})(ZapierRulePatchRequestModeEnum = exports.ZapierRulePatchRequestModeEnum || (exports.ZapierRulePatchRequestModeEnum = {}));
var ZapierRulePatchRuleTypeEnum;
(function (ZapierRulePatchRuleTypeEnum) {
    ZapierRulePatchRuleTypeEnum["HttpZapier"] = "http/zapier";
})(ZapierRulePatchRuleTypeEnum = exports.ZapierRulePatchRuleTypeEnum || (exports.ZapierRulePatchRuleTypeEnum = {}));
var ZapierRulePatchStatusEnum;
(function (ZapierRulePatchStatusEnum) {
    ZapierRulePatchStatusEnum["Enabled"] = "enabled";
    ZapierRulePatchStatusEnum["Disabled"] = "disabled";
})(ZapierRulePatchStatusEnum = exports.ZapierRulePatchStatusEnum || (exports.ZapierRulePatchStatusEnum = {}));
var ZapierRulePatchTargetHeaders = /** @class */ (function (_super) {
    __extends(ZapierRulePatchTargetHeaders, _super);
    function ZapierRulePatchTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ZapierRulePatchTargetHeaders.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ZapierRulePatchTargetHeaders.prototype, "value", void 0);
    return ZapierRulePatchTargetHeaders;
}(utils_1.SpeakeasyBase));
exports.ZapierRulePatchTargetHeaders = ZapierRulePatchTargetHeaders;
var ZapierRulePatchTarget = /** @class */ (function (_super) {
    __extends(ZapierRulePatchTarget, _super);
    function ZapierRulePatchTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: ZapierRulePatchTargetHeaders }),
        __metadata("design:type", Array)
    ], ZapierRulePatchTarget.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], ZapierRulePatchTarget.prototype, "signingKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ZapierRulePatchTarget.prototype, "url", void 0);
    return ZapierRulePatchTarget;
}(utils_1.SpeakeasyBase));
exports.ZapierRulePatchTarget = ZapierRulePatchTarget;
var ZapierRulePatch = /** @class */ (function (_super) {
    __extends(ZapierRulePatch, _super);
    function ZapierRulePatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], ZapierRulePatch.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], ZapierRulePatch.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], ZapierRulePatch.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ZapierRulePatch.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", ZapierRulePatchTarget)
    ], ZapierRulePatch.prototype, "target", void 0);
    return ZapierRulePatch;
}(utils_1.SpeakeasyBase));
exports.ZapierRulePatch = ZapierRulePatch;
