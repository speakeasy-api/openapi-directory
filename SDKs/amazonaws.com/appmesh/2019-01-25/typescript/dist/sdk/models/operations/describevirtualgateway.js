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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeVirtualGatewayResponse = exports.DescribeVirtualGatewayRequest = exports.DescribeVirtualGatewayHeaders = exports.DescribeVirtualGatewayQueryParams = exports.DescribeVirtualGatewayPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DescribeVirtualGatewayPathParams = /** @class */ (function (_super) {
    __extends(DescribeVirtualGatewayPathParams, _super);
    function DescribeVirtualGatewayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayPathParams.prototype, "meshName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayPathParams.prototype, "virtualGatewayName", void 0);
    return DescribeVirtualGatewayPathParams;
}(utils_1.SpeakeasyBase));
exports.DescribeVirtualGatewayPathParams = DescribeVirtualGatewayPathParams;
var DescribeVirtualGatewayQueryParams = /** @class */ (function (_super) {
    __extends(DescribeVirtualGatewayQueryParams, _super);
    function DescribeVirtualGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayQueryParams.prototype, "meshOwner", void 0);
    return DescribeVirtualGatewayQueryParams;
}(utils_1.SpeakeasyBase));
exports.DescribeVirtualGatewayQueryParams = DescribeVirtualGatewayQueryParams;
var DescribeVirtualGatewayHeaders = /** @class */ (function (_super) {
    __extends(DescribeVirtualGatewayHeaders, _super);
    function DescribeVirtualGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeVirtualGatewayHeaders;
}(utils_1.SpeakeasyBase));
exports.DescribeVirtualGatewayHeaders = DescribeVirtualGatewayHeaders;
var DescribeVirtualGatewayRequest = /** @class */ (function (_super) {
    __extends(DescribeVirtualGatewayRequest, _super);
    function DescribeVirtualGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeVirtualGatewayPathParams)
    ], DescribeVirtualGatewayRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeVirtualGatewayQueryParams)
    ], DescribeVirtualGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeVirtualGatewayHeaders)
    ], DescribeVirtualGatewayRequest.prototype, "headers", void 0);
    return DescribeVirtualGatewayRequest;
}(utils_1.SpeakeasyBase));
exports.DescribeVirtualGatewayRequest = DescribeVirtualGatewayRequest;
var DescribeVirtualGatewayResponse = /** @class */ (function (_super) {
    __extends(DescribeVirtualGatewayResponse, _super);
    function DescribeVirtualGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVirtualGatewayResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeVirtualGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DescribeVirtualGatewayOutput)
    ], DescribeVirtualGatewayResponse.prototype, "describeVirtualGatewayOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVirtualGatewayResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVirtualGatewayResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVirtualGatewayResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVirtualGatewayResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeVirtualGatewayResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeVirtualGatewayResponse.prototype, "tooManyRequestsException", void 0);
    return DescribeVirtualGatewayResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeVirtualGatewayResponse = DescribeVirtualGatewayResponse;
