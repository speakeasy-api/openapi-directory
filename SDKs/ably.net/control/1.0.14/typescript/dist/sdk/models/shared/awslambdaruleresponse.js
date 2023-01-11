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
exports.AwsLambdaRuleResponse = exports.AwsLambdaRuleResponseTarget = exports.AwsLambdaRuleResponseStatusEnum = exports.AwsLambdaRuleResponseRuleTypeEnum = exports.AwsLambdaRuleResponseRequestModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rulesource_1 = require("./rulesource");
var AwsLambdaRuleResponseRequestModeEnum;
(function (AwsLambdaRuleResponseRequestModeEnum) {
    AwsLambdaRuleResponseRequestModeEnum["Single"] = "single";
})(AwsLambdaRuleResponseRequestModeEnum = exports.AwsLambdaRuleResponseRequestModeEnum || (exports.AwsLambdaRuleResponseRequestModeEnum = {}));
var AwsLambdaRuleResponseRuleTypeEnum;
(function (AwsLambdaRuleResponseRuleTypeEnum) {
    AwsLambdaRuleResponseRuleTypeEnum["AwsLambda"] = "aws/lambda";
})(AwsLambdaRuleResponseRuleTypeEnum = exports.AwsLambdaRuleResponseRuleTypeEnum || (exports.AwsLambdaRuleResponseRuleTypeEnum = {}));
var AwsLambdaRuleResponseStatusEnum;
(function (AwsLambdaRuleResponseStatusEnum) {
    AwsLambdaRuleResponseStatusEnum["Enabled"] = "enabled";
    AwsLambdaRuleResponseStatusEnum["Disabled"] = "disabled";
})(AwsLambdaRuleResponseStatusEnum = exports.AwsLambdaRuleResponseStatusEnum || (exports.AwsLambdaRuleResponseStatusEnum = {}));
var AwsLambdaRuleResponseTarget = /** @class */ (function (_super) {
    __extends(AwsLambdaRuleResponseTarget, _super);
    function AwsLambdaRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication" }),
        __metadata("design:type", Object)
    ], AwsLambdaRuleResponseTarget.prototype, "authentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AwsLambdaRuleResponseTarget.prototype, "enveloped", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponseTarget.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=functionName" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponseTarget.prototype, "functionName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponseTarget.prototype, "region", void 0);
    return AwsLambdaRuleResponseTarget;
}(utils_1.SpeakeasyBase));
exports.AwsLambdaRuleResponseTarget = AwsLambdaRuleResponseTarget;
var AwsLambdaRuleResponse = /** @class */ (function (_super) {
    __extends(AwsLambdaRuleResponse, _super);
    function AwsLambdaRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", Object)
    ], AwsLambdaRuleResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], AwsLambdaRuleResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], AwsLambdaRuleResponse.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", rulesource_1.RuleSource)
    ], AwsLambdaRuleResponse.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", AwsLambdaRuleResponseTarget)
    ], AwsLambdaRuleResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], AwsLambdaRuleResponse.prototype, "version", void 0);
    return AwsLambdaRuleResponse;
}(utils_1.SpeakeasyBase));
exports.AwsLambdaRuleResponse = AwsLambdaRuleResponse;
