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
exports.DescribeVpcAttributeResult = exports.DescribeVpcAttributeResultEnableDnsSupport = exports.DescribeVpcAttributeResultEnableDnsHostnames = void 0;
var utils_1 = require("../../../internal/utils");
// DescribeVpcAttributeResultEnableDnsHostnames
/**
 * Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is <code>true</code>, instances in the VPC get DNS hostnames; otherwise, they do not.
**/
var DescribeVpcAttributeResultEnableDnsHostnames = /** @class */ (function (_super) {
    __extends(DescribeVpcAttributeResultEnableDnsHostnames, _super);
    function DescribeVpcAttributeResultEnableDnsHostnames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVpcAttributeResultEnableDnsHostnames.prototype, "value", void 0);
    return DescribeVpcAttributeResultEnableDnsHostnames;
}(utils_1.SpeakeasyBase));
exports.DescribeVpcAttributeResultEnableDnsHostnames = DescribeVpcAttributeResultEnableDnsHostnames;
// DescribeVpcAttributeResultEnableDnsSupport
/**
 * Indicates whether DNS resolution is enabled for the VPC. If this attribute is <code>true</code>, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
**/
var DescribeVpcAttributeResultEnableDnsSupport = /** @class */ (function (_super) {
    __extends(DescribeVpcAttributeResultEnableDnsSupport, _super);
    function DescribeVpcAttributeResultEnableDnsSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVpcAttributeResultEnableDnsSupport.prototype, "value", void 0);
    return DescribeVpcAttributeResultEnableDnsSupport;
}(utils_1.SpeakeasyBase));
exports.DescribeVpcAttributeResultEnableDnsSupport = DescribeVpcAttributeResultEnableDnsSupport;
var DescribeVpcAttributeResult = /** @class */ (function (_super) {
    __extends(DescribeVpcAttributeResult, _super);
    function DescribeVpcAttributeResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeVpcAttributeResultEnableDnsHostnames)
    ], DescribeVpcAttributeResult.prototype, "enableDnsHostnames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeVpcAttributeResultEnableDnsSupport)
    ], DescribeVpcAttributeResult.prototype, "enableDnsSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVpcAttributeResult.prototype, "vpcId", void 0);
    return DescribeVpcAttributeResult;
}(utils_1.SpeakeasyBase));
exports.DescribeVpcAttributeResult = DescribeVpcAttributeResult;
