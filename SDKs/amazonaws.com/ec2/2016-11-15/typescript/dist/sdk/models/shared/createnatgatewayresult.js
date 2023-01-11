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
exports.CreateNatGatewayResult = exports.CreateNatGatewayResultNatGateway = exports.CreateNatGatewayResultNatGatewayProvisionedBandwidth = void 0;
var utils_1 = require("../../../internal/utils");
// CreateNatGatewayResultNatGatewayProvisionedBandwidth
/**
 * Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
**/
var CreateNatGatewayResultNatGatewayProvisionedBandwidth = /** @class */ (function (_super) {
    __extends(CreateNatGatewayResultNatGatewayProvisionedBandwidth, _super);
    function CreateNatGatewayResultNatGatewayProvisionedBandwidth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGatewayProvisionedBandwidth.prototype, "provisionTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGatewayProvisionedBandwidth.prototype, "provisioned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGatewayProvisionedBandwidth.prototype, "requestTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGatewayProvisionedBandwidth.prototype, "requested", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGatewayProvisionedBandwidth.prototype, "status", void 0);
    return CreateNatGatewayResultNatGatewayProvisionedBandwidth;
}(utils_1.SpeakeasyBase));
exports.CreateNatGatewayResultNatGatewayProvisionedBandwidth = CreateNatGatewayResultNatGatewayProvisionedBandwidth;
// CreateNatGatewayResultNatGateway
/**
 * Information about the NAT gateway.
**/
var CreateNatGatewayResultNatGateway = /** @class */ (function (_super) {
    __extends(CreateNatGatewayResultNatGateway, _super);
    function CreateNatGatewayResultNatGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "connectivityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "deleteTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "failureCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "failureMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "natGatewayAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "natGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNatGatewayResultNatGatewayProvisionedBandwidth)
    ], CreateNatGatewayResultNatGateway.prototype, "provisionedBandwidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "subnetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResultNatGateway.prototype, "vpcId", void 0);
    return CreateNatGatewayResultNatGateway;
}(utils_1.SpeakeasyBase));
exports.CreateNatGatewayResultNatGateway = CreateNatGatewayResultNatGateway;
var CreateNatGatewayResult = /** @class */ (function (_super) {
    __extends(CreateNatGatewayResult, _super);
    function CreateNatGatewayResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNatGatewayResult.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNatGatewayResultNatGateway)
    ], CreateNatGatewayResult.prototype, "natGateway", void 0);
    return CreateNatGatewayResult;
}(utils_1.SpeakeasyBase));
exports.CreateNatGatewayResult = CreateNatGatewayResult;
