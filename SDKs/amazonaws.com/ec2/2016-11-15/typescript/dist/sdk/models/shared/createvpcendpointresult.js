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
exports.CreateVpcEndpointResult = exports.CreateVpcEndpointResultVpcEndpoint = exports.CreateVpcEndpointResultVpcEndpointLastError = void 0;
var utils_1 = require("../../../internal/utils");
// CreateVpcEndpointResultVpcEndpointLastError
/**
 * The last error that occurred for VPC endpoint.
**/
var CreateVpcEndpointResultVpcEndpointLastError = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointResultVpcEndpointLastError, _super);
    function CreateVpcEndpointResultVpcEndpointLastError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpointLastError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpointLastError.prototype, "message", void 0);
    return CreateVpcEndpointResultVpcEndpointLastError;
}(utils_1.SpeakeasyBase));
exports.CreateVpcEndpointResultVpcEndpointLastError = CreateVpcEndpointResultVpcEndpointLastError;
// CreateVpcEndpointResultVpcEndpoint
/**
 * Information about the endpoint.
**/
var CreateVpcEndpointResultVpcEndpoint = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointResultVpcEndpoint, _super);
    function CreateVpcEndpointResultVpcEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "creationTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "dnsEntries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcEndpointResultVpcEndpointLastError)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "lastError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "networkInterfaceIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "policyDocument", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "privateDnsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "requesterManaged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "routeTableIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "serviceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "subnetIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "vpcEndpointId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "vpcEndpointType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResultVpcEndpoint.prototype, "vpcId", void 0);
    return CreateVpcEndpointResultVpcEndpoint;
}(utils_1.SpeakeasyBase));
exports.CreateVpcEndpointResultVpcEndpoint = CreateVpcEndpointResultVpcEndpoint;
// CreateVpcEndpointResult
/**
 * Contains the output of CreateVpcEndpoint.
**/
var CreateVpcEndpointResult = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointResult, _super);
    function CreateVpcEndpointResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcEndpointResult.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcEndpointResultVpcEndpoint)
    ], CreateVpcEndpointResult.prototype, "vpcEndpoint", void 0);
    return CreateVpcEndpointResult;
}(utils_1.SpeakeasyBase));
exports.CreateVpcEndpointResult = CreateVpcEndpointResult;
