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
exports.DisassociateIdentityProviderConfigResponse = exports.DisassociateIdentityProviderConfigRequest = exports.DisassociateIdentityProviderConfigRequestBody = exports.DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig = exports.DisassociateIdentityProviderConfigHeaders = exports.DisassociateIdentityProviderConfigPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DisassociateIdentityProviderConfigPathParams = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigPathParams, _super);
    function DisassociateIdentityProviderConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigPathParams.prototype, "name", void 0);
    return DisassociateIdentityProviderConfigPathParams;
}(utils_1.SpeakeasyBase));
exports.DisassociateIdentityProviderConfigPathParams = DisassociateIdentityProviderConfigPathParams;
var DisassociateIdentityProviderConfigHeaders = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigHeaders, _super);
    function DisassociateIdentityProviderConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DisassociateIdentityProviderConfigHeaders;
}(utils_1.SpeakeasyBase));
exports.DisassociateIdentityProviderConfigHeaders = DisassociateIdentityProviderConfigHeaders;
// DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig
/**
 * An object representing an identity provider configuration.
**/
var DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig, _super);
    function DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig.prototype, "type", void 0);
    return DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig;
}(utils_1.SpeakeasyBase));
exports.DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig = DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig;
var DisassociateIdentityProviderConfigRequestBody = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigRequestBody, _super);
    function DisassociateIdentityProviderConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identityProviderConfig" }),
        __metadata("design:type", DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig)
    ], DisassociateIdentityProviderConfigRequestBody.prototype, "identityProviderConfig", void 0);
    return DisassociateIdentityProviderConfigRequestBody;
}(utils_1.SpeakeasyBase));
exports.DisassociateIdentityProviderConfigRequestBody = DisassociateIdentityProviderConfigRequestBody;
var DisassociateIdentityProviderConfigRequest = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigRequest, _super);
    function DisassociateIdentityProviderConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DisassociateIdentityProviderConfigPathParams)
    ], DisassociateIdentityProviderConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DisassociateIdentityProviderConfigHeaders)
    ], DisassociateIdentityProviderConfigRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DisassociateIdentityProviderConfigRequestBody)
    ], DisassociateIdentityProviderConfigRequest.prototype, "request", void 0);
    return DisassociateIdentityProviderConfigRequest;
}(utils_1.SpeakeasyBase));
exports.DisassociateIdentityProviderConfigRequest = DisassociateIdentityProviderConfigRequest;
var DisassociateIdentityProviderConfigResponse = /** @class */ (function (_super) {
    __extends(DisassociateIdentityProviderConfigResponse, _super);
    function DisassociateIdentityProviderConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "clientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DisassociateIdentityProviderConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DisassociateIdentityProviderConfigResponse)
    ], DisassociateIdentityProviderConfigResponse.prototype, "disassociateIdentityProviderConfigResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateIdentityProviderConfigResponse.prototype, "serverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DisassociateIdentityProviderConfigResponse.prototype, "statusCode", void 0);
    return DisassociateIdentityProviderConfigResponse;
}(utils_1.SpeakeasyBase));
exports.DisassociateIdentityProviderConfigResponse = DisassociateIdentityProviderConfigResponse;
