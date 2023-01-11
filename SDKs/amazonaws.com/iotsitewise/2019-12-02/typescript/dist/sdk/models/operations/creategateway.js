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
exports.CreateGatewayResponse = exports.CreateGatewayRequest = exports.CreateGatewayRequestBody = exports.CreateGatewayRequestBodyGatewayPlatform = exports.CreateGatewayHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateGatewayHeaders = /** @class */ (function (_super) {
    __extends(CreateGatewayHeaders, _super);
    function CreateGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateGatewayHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateGatewayHeaders = CreateGatewayHeaders;
// CreateGatewayRequestBodyGatewayPlatform
/**
 * Contains a gateway's platform information.
**/
var CreateGatewayRequestBodyGatewayPlatform = /** @class */ (function (_super) {
    __extends(CreateGatewayRequestBodyGatewayPlatform, _super);
    function CreateGatewayRequestBodyGatewayPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=greengrass" }),
        __metadata("design:type", shared.Greengrass)
    ], CreateGatewayRequestBodyGatewayPlatform.prototype, "greengrass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=greengrassV2" }),
        __metadata("design:type", shared.GreengrassV2)
    ], CreateGatewayRequestBodyGatewayPlatform.prototype, "greengrassV2", void 0);
    return CreateGatewayRequestBodyGatewayPlatform;
}(utils_1.SpeakeasyBase));
exports.CreateGatewayRequestBodyGatewayPlatform = CreateGatewayRequestBodyGatewayPlatform;
var CreateGatewayRequestBody = /** @class */ (function (_super) {
    __extends(CreateGatewayRequestBody, _super);
    function CreateGatewayRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayName" }),
        __metadata("design:type", String)
    ], CreateGatewayRequestBody.prototype, "gatewayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayPlatform" }),
        __metadata("design:type", CreateGatewayRequestBodyGatewayPlatform)
    ], CreateGatewayRequestBody.prototype, "gatewayPlatform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateGatewayRequestBody.prototype, "tags", void 0);
    return CreateGatewayRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateGatewayRequestBody = CreateGatewayRequestBody;
var CreateGatewayRequest = /** @class */ (function (_super) {
    __extends(CreateGatewayRequest, _super);
    function CreateGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGatewayHeaders)
    ], CreateGatewayRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateGatewayRequestBody)
    ], CreateGatewayRequest.prototype, "request", void 0);
    return CreateGatewayRequest;
}(utils_1.SpeakeasyBase));
exports.CreateGatewayRequest = CreateGatewayRequest;
var CreateGatewayResponse = /** @class */ (function (_super) {
    __extends(CreateGatewayResponse, _super);
    function CreateGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateGatewayResponse)
    ], CreateGatewayResponse.prototype, "createGatewayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateGatewayResponse.prototype, "internalFailureException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateGatewayResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateGatewayResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateGatewayResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateGatewayResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateGatewayResponse.prototype, "throttlingException", void 0);
    return CreateGatewayResponse;
}(utils_1.SpeakeasyBase));
exports.CreateGatewayResponse = CreateGatewayResponse;
