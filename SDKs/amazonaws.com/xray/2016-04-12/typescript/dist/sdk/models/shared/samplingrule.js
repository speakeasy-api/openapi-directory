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
exports.SamplingRule = void 0;
var utils_1 = require("../../../internal/utils");
// SamplingRule
/**
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
var SamplingRule = /** @class */ (function (_super) {
    __extends(SamplingRule, _super);
    function SamplingRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes" }),
        __metadata("design:type", Object)
    ], SamplingRule.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FixedRate" }),
        __metadata("design:type", Number)
    ], SamplingRule.prototype, "fixedRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=HTTPMethod" }),
        __metadata("design:type", String)
    ], SamplingRule.prototype, "httpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Host" }),
        __metadata("design:type", String)
    ], SamplingRule.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], SamplingRule.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReservoirSize" }),
        __metadata("design:type", Number)
    ], SamplingRule.prototype, "reservoirSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], SamplingRule.prototype, "resourceARN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RuleARN" }),
        __metadata("design:type", String)
    ], SamplingRule.prototype, "ruleARN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RuleName" }),
        __metadata("design:type", String)
    ], SamplingRule.prototype, "ruleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], SamplingRule.prototype, "serviceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceType" }),
        __metadata("design:type", String)
    ], SamplingRule.prototype, "serviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=URLPath" }),
        __metadata("design:type", String)
    ], SamplingRule.prototype, "urlPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], SamplingRule.prototype, "version", void 0);
    return SamplingRule;
}(utils_1.SpeakeasyBase));
exports.SamplingRule = SamplingRule;
