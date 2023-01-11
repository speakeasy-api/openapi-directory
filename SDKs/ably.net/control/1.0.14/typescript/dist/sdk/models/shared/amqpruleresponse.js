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
exports.AmqpRuleResponse = exports.AmqpRuleResponseTarget = exports.AmqpRuleResponseTargetHeaders = exports.AmqpRuleResponseStatusEnum = exports.AmqpRuleResponseRuleTypeEnum = exports.AmqpRuleResponseRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var AmqpRuleResponseRequestModeEnum;
(function (AmqpRuleResponseRequestModeEnum) {
    AmqpRuleResponseRequestModeEnum["Single"] = "single";
})(AmqpRuleResponseRequestModeEnum = exports.AmqpRuleResponseRequestModeEnum || (exports.AmqpRuleResponseRequestModeEnum = {}));
var AmqpRuleResponseRuleTypeEnum;
(function (AmqpRuleResponseRuleTypeEnum) {
    AmqpRuleResponseRuleTypeEnum["Amqp"] = "amqp";
})(AmqpRuleResponseRuleTypeEnum = exports.AmqpRuleResponseRuleTypeEnum || (exports.AmqpRuleResponseRuleTypeEnum = {}));
var AmqpRuleResponseStatusEnum;
(function (AmqpRuleResponseStatusEnum) {
    AmqpRuleResponseStatusEnum["Enabled"] = "enabled";
    AmqpRuleResponseStatusEnum["Disabled"] = "disabled";
})(AmqpRuleResponseStatusEnum = exports.AmqpRuleResponseStatusEnum || (exports.AmqpRuleResponseStatusEnum = {}));
var AmqpRuleResponseTargetHeaders = /** @class */ (function (_super) {
    __extends(AmqpRuleResponseTargetHeaders, _super);
    function AmqpRuleResponseTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AmqpRuleResponseTargetHeaders.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AmqpRuleResponseTargetHeaders.prototype, "value", void 0);
    return AmqpRuleResponseTargetHeaders;
}(utils_1.SpeakeasyBase));
exports.AmqpRuleResponseTargetHeaders = AmqpRuleResponseTargetHeaders;
var AmqpRuleResponseTarget = /** @class */ (function (_super) {
    __extends(AmqpRuleResponseTarget, _super);
    function AmqpRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AmqpRuleResponseTarget.prototype, "enveloped", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AmqpRuleResponseTarget.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: AmqpRuleResponseTargetHeaders }),
        __metadata("design:type", Array)
    ], AmqpRuleResponseTarget.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queueId" }),
        __metadata("design:type", String)
    ], AmqpRuleResponseTarget.prototype, "queueId", void 0);
    return AmqpRuleResponseTarget;
}(utils_1.SpeakeasyBase));
exports.AmqpRuleResponseTarget = AmqpRuleResponseTarget;
var AmqpRuleResponse = /** @class */ (function (_super) {
    __extends(AmqpRuleResponse, _super);
    function AmqpRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", Object)
    ], AmqpRuleResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], AmqpRuleResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], AmqpRuleResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AmqpRuleResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], AmqpRuleResponse.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AmqpRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AmqpRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], AmqpRuleResponse.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AmqpRuleResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", AmqpRuleResponseTarget)
    ], AmqpRuleResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], AmqpRuleResponse.prototype, "version", void 0);
    return AmqpRuleResponse;
}(utils_1.SpeakeasyBase));
exports.AmqpRuleResponse = AmqpRuleResponse;
