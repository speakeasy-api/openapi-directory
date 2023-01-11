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
exports.ModifyTrafficMirrorFilterRuleResult = exports.ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule = exports.ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange = exports.ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange = void 0;
var utils_1 = require("../../../internal/utils");
// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
/**
 * The destination port range assigned to the Traffic Mirror rule.
**/
var ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange = /** @class */ (function (_super) {
    __extends(ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange, _super);
    function ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange.prototype, "fromPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange.prototype, "toPort", void 0);
    return ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;
}(utils_1.SpeakeasyBase));
exports.ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange = ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;
// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
/**
 * The source port range assigned to the Traffic Mirror rule.
**/
var ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange = /** @class */ (function (_super) {
    __extends(ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange, _super);
    function ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange.prototype, "fromPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange.prototype, "toPort", void 0);
    return ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;
}(utils_1.SpeakeasyBase));
exports.ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange = ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;
// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
/**
 * Modifies a Traffic Mirror rule.
**/
var ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule = /** @class */ (function (_super) {
    __extends(ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule, _super);
    function ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "destinationCidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "destinationPortRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "ruleAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "ruleNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "sourceCidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "sourcePortRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "trafficDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "trafficMirrorFilterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule.prototype, "trafficMirrorFilterRuleId", void 0);
    return ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
}(utils_1.SpeakeasyBase));
exports.ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule = ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
var ModifyTrafficMirrorFilterRuleResult = /** @class */ (function (_super) {
    __extends(ModifyTrafficMirrorFilterRuleResult, _super);
    function ModifyTrafficMirrorFilterRuleResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule)
    ], ModifyTrafficMirrorFilterRuleResult.prototype, "trafficMirrorFilterRule", void 0);
    return ModifyTrafficMirrorFilterRuleResult;
}(utils_1.SpeakeasyBase));
exports.ModifyTrafficMirrorFilterRuleResult = ModifyTrafficMirrorFilterRuleResult;
