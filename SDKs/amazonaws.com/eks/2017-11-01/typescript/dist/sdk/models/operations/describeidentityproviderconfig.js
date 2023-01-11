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
exports.DescribeIdentityProviderConfigResponse = exports.DescribeIdentityProviderConfigRequest = exports.DescribeIdentityProviderConfigRequestBody = exports.DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig = exports.DescribeIdentityProviderConfigHeaders = exports.DescribeIdentityProviderConfigPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DescribeIdentityProviderConfigPathParams = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderConfigPathParams, _super);
    function DescribeIdentityProviderConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigPathParams.prototype, "name", void 0);
    return DescribeIdentityProviderConfigPathParams;
}(utils_1.SpeakeasyBase));
exports.DescribeIdentityProviderConfigPathParams = DescribeIdentityProviderConfigPathParams;
var DescribeIdentityProviderConfigHeaders = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderConfigHeaders, _super);
    function DescribeIdentityProviderConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeIdentityProviderConfigHeaders;
}(utils_1.SpeakeasyBase));
exports.DescribeIdentityProviderConfigHeaders = DescribeIdentityProviderConfigHeaders;
// DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig
/**
 * An object representing an identity provider configuration.
**/
var DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig, _super);
    function DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig.prototype, "type", void 0);
    return DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig;
}(utils_1.SpeakeasyBase));
exports.DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig = DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig;
var DescribeIdentityProviderConfigRequestBody = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderConfigRequestBody, _super);
    function DescribeIdentityProviderConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identityProviderConfig" }),
        __metadata("design:type", DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig)
    ], DescribeIdentityProviderConfigRequestBody.prototype, "identityProviderConfig", void 0);
    return DescribeIdentityProviderConfigRequestBody;
}(utils_1.SpeakeasyBase));
exports.DescribeIdentityProviderConfigRequestBody = DescribeIdentityProviderConfigRequestBody;
var DescribeIdentityProviderConfigRequest = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderConfigRequest, _super);
    function DescribeIdentityProviderConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeIdentityProviderConfigPathParams)
    ], DescribeIdentityProviderConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeIdentityProviderConfigHeaders)
    ], DescribeIdentityProviderConfigRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeIdentityProviderConfigRequestBody)
    ], DescribeIdentityProviderConfigRequest.prototype, "request", void 0);
    return DescribeIdentityProviderConfigRequest;
}(utils_1.SpeakeasyBase));
exports.DescribeIdentityProviderConfigRequest = DescribeIdentityProviderConfigRequest;
var DescribeIdentityProviderConfigResponse = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderConfigResponse, _super);
    function DescribeIdentityProviderConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeIdentityProviderConfigResponse.prototype, "clientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeIdentityProviderConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DescribeIdentityProviderConfigResponse)
    ], DescribeIdentityProviderConfigResponse.prototype, "describeIdentityProviderConfigResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeIdentityProviderConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeIdentityProviderConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeIdentityProviderConfigResponse.prototype, "serverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeIdentityProviderConfigResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeIdentityProviderConfigResponse.prototype, "statusCode", void 0);
    return DescribeIdentityProviderConfigResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeIdentityProviderConfigResponse = DescribeIdentityProviderConfigResponse;
