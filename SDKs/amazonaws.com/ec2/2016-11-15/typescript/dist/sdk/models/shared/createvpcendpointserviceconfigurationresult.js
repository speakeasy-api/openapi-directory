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
exports.CreateVpcEndpointServiceConfigurationResult = exports.CreateVpcEndpointServiceConfigurationResultServiceConfiguration = exports.CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
// CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration
/**
 * Information about the endpoint service private DNS name configuration.
**/
var CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration, _super);
    function CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration.prototype, "value", void 0);
    return CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration;
}(utils_1.SpeakeasyBase));
exports.CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration = CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration;
// CreateVpcEndpointServiceConfigurationResultServiceConfiguration
/**
 * Information about the service configuration.
**/
var CreateVpcEndpointServiceConfigurationResultServiceConfiguration = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointServiceConfigurationResultServiceConfiguration, _super);
    function CreateVpcEndpointServiceConfigurationResultServiceConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "acceptanceRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "availabilityZones", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "baseEndpointDnsNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "gatewayLoadBalancerArns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "managesVpcEndpoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "networkLoadBalancerArns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "privateDnsName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "privateDnsNameConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "serviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "serviceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "serviceState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "serviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResultServiceConfiguration.prototype, "tags", void 0);
    return CreateVpcEndpointServiceConfigurationResultServiceConfiguration;
}(utils_1.SpeakeasyBase));
exports.CreateVpcEndpointServiceConfigurationResultServiceConfiguration = CreateVpcEndpointServiceConfigurationResultServiceConfiguration;
var CreateVpcEndpointServiceConfigurationResult = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointServiceConfigurationResult, _super);
    function CreateVpcEndpointServiceConfigurationResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointServiceConfigurationResult.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcEndpointServiceConfigurationResultServiceConfiguration)
    ], CreateVpcEndpointServiceConfigurationResult.prototype, "serviceConfiguration", void 0);
    return CreateVpcEndpointServiceConfigurationResult;
}(utils_1.SpeakeasyBase));
exports.CreateVpcEndpointServiceConfigurationResult = CreateVpcEndpointServiceConfigurationResult;
