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
exports.CreateTrafficMirrorFilterRuleResult = exports.CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule = exports.CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange = exports.CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange = void 0;
var utils_1 = require("../../../internal/utils");
// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
/**
 * The destination port range assigned to the Traffic Mirror rule.
**/
var CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange = /** @class */ (function (_super) {
    __extends(CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange, _super);
    function CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange.prototype, "fromPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange.prototype, "toPort", void 0);
    return CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;
}(utils_1.SpeakeasyBase));
exports.CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange = CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;
// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
/**
 * The source port range assigned to the Traffic Mirror rule.
**/
var CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange = /** @class */ (function (_super) {
    __extends(CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange, _super);
    function CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange.prototype, "fromPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange.prototype, "toPort", void 0);
    return CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;
}(utils_1.SpeakeasyBase));
exports.CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange = CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;
// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
/**
 * The Traffic Mirror rule.
**/
var CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule = /** @class */ (function (_super) {
    __extends(CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule, _super);
    function CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "destinationCidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "destinationPortRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "ruleAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "ruleNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "sourceCidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "sourcePortRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "trafficDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "trafficMirrorFilterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "trafficMirrorFilterRuleId", void 0);
    return CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
}(utils_1.SpeakeasyBase));
exports.CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule = CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
var CreateTrafficMirrorFilterRuleResult = /** @class */ (function (_super) {
    __extends(CreateTrafficMirrorFilterRuleResult, _super);
    function CreateTrafficMirrorFilterRuleResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTrafficMirrorFilterRuleResult.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule)
    ], CreateTrafficMirrorFilterRuleResult.prototype, "trafficMirrorFilterRule", void 0);
    return CreateTrafficMirrorFilterRuleResult;
}(utils_1.SpeakeasyBase));
exports.CreateTrafficMirrorFilterRuleResult = CreateTrafficMirrorFilterRuleResult;
