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
exports.ZapierRuleResponse = exports.ZapierRuleResponseTarget = exports.ZapierRuleResponseTargetHeaders = exports.ZapierRuleResponseStatusEnum = exports.ZapierRuleResponseRuleTypeEnum = exports.ZapierRuleResponseRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var ZapierRuleResponseRequestModeEnum;
(function (ZapierRuleResponseRequestModeEnum) {
    ZapierRuleResponseRequestModeEnum["Single"] = "single";
    ZapierRuleResponseRequestModeEnum["Batch"] = "batch";
})(ZapierRuleResponseRequestModeEnum = exports.ZapierRuleResponseRequestModeEnum || (exports.ZapierRuleResponseRequestModeEnum = {}));
var ZapierRuleResponseRuleTypeEnum;
(function (ZapierRuleResponseRuleTypeEnum) {
    ZapierRuleResponseRuleTypeEnum["HttpZapier"] = "http/zapier";
})(ZapierRuleResponseRuleTypeEnum = exports.ZapierRuleResponseRuleTypeEnum || (exports.ZapierRuleResponseRuleTypeEnum = {}));
var ZapierRuleResponseStatusEnum;
(function (ZapierRuleResponseStatusEnum) {
    ZapierRuleResponseStatusEnum["Enabled"] = "enabled";
    ZapierRuleResponseStatusEnum["Disabled"] = "disabled";
})(ZapierRuleResponseStatusEnum = exports.ZapierRuleResponseStatusEnum || (exports.ZapierRuleResponseStatusEnum = {}));
var ZapierRuleResponseTargetHeaders = /** @class */ (function (_super) {
    __extends(ZapierRuleResponseTargetHeaders, _super);
    function ZapierRuleResponseTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ZapierRuleResponseTargetHeaders.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ZapierRuleResponseTargetHeaders.prototype, "value", void 0);
    return ZapierRuleResponseTargetHeaders;
}(utils_1.SpeakeasyBase));
exports.ZapierRuleResponseTargetHeaders = ZapierRuleResponseTargetHeaders;
var ZapierRuleResponseTarget = /** @class */ (function (_super) {
    __extends(ZapierRuleResponseTarget, _super);
    function ZapierRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: ZapierRuleResponseTargetHeaders }),
        __metadata("design:type", Array)
    ], ZapierRuleResponseTarget.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], ZapierRuleResponseTarget.prototype, "signingKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ZapierRuleResponseTarget.prototype, "url", void 0);
    return ZapierRuleResponseTarget;
}(utils_1.SpeakeasyBase));
exports.ZapierRuleResponseTarget = ZapierRuleResponseTarget;
var ZapierRuleResponse = /** @class */ (function (_super) {
    __extends(ZapierRuleResponse, _super);
    function ZapierRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", Object)
    ], ZapierRuleResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], ZapierRuleResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], ZapierRuleResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ZapierRuleResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], ZapierRuleResponse.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], ZapierRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], ZapierRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], ZapierRuleResponse.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ZapierRuleResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", ZapierRuleResponseTarget)
    ], ZapierRuleResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ZapierRuleResponse.prototype, "version", void 0);
    return ZapierRuleResponse;
}(utils_1.SpeakeasyBase));
exports.ZapierRuleResponse = ZapierRuleResponse;
