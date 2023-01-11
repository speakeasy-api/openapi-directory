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
exports.UpdateDomainNameResponse = exports.UpdateDomainNameRequest = exports.UpdateDomainNameRequestBody = exports.UpdateDomainNameRequestBodyMutualTlsAuthentication = exports.UpdateDomainNameHeaders = exports.UpdateDomainNamePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateDomainNamePathParams = /** @class */ (function (_super) {
    __extends(UpdateDomainNamePathParams, _super);
    function UpdateDomainNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], UpdateDomainNamePathParams.prototype, "domainName", void 0);
    return UpdateDomainNamePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainNamePathParams = UpdateDomainNamePathParams;
var UpdateDomainNameHeaders = /** @class */ (function (_super) {
    __extends(UpdateDomainNameHeaders, _super);
    function UpdateDomainNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDomainNameHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainNameHeaders = UpdateDomainNameHeaders;
// UpdateDomainNameRequestBodyMutualTlsAuthentication
/**
 * The mutual TLS authentication configuration for a custom domain name.
**/
var UpdateDomainNameRequestBodyMutualTlsAuthentication = /** @class */ (function (_super) {
    __extends(UpdateDomainNameRequestBodyMutualTlsAuthentication, _super);
    function UpdateDomainNameRequestBodyMutualTlsAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TruststoreUri" }),
        __metadata("design:type", Object)
    ], UpdateDomainNameRequestBodyMutualTlsAuthentication.prototype, "truststoreUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TruststoreVersion" }),
        __metadata("design:type", Object)
    ], UpdateDomainNameRequestBodyMutualTlsAuthentication.prototype, "truststoreVersion", void 0);
    return UpdateDomainNameRequestBodyMutualTlsAuthentication;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainNameRequestBodyMutualTlsAuthentication = UpdateDomainNameRequestBodyMutualTlsAuthentication;
var UpdateDomainNameRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDomainNameRequestBody, _super);
    function UpdateDomainNameRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainNameConfigurations", elemType: shared.DomainNameConfiguration }),
        __metadata("design:type", Array)
    ], UpdateDomainNameRequestBody.prototype, "domainNameConfigurations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mutualTlsAuthentication" }),
        __metadata("design:type", UpdateDomainNameRequestBodyMutualTlsAuthentication)
    ], UpdateDomainNameRequestBody.prototype, "mutualTlsAuthentication", void 0);
    return UpdateDomainNameRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainNameRequestBody = UpdateDomainNameRequestBody;
var UpdateDomainNameRequest = /** @class */ (function (_super) {
    __extends(UpdateDomainNameRequest, _super);
    function UpdateDomainNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDomainNamePathParams)
    ], UpdateDomainNameRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDomainNameHeaders)
    ], UpdateDomainNameRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDomainNameRequestBody)
    ], UpdateDomainNameRequest.prototype, "request", void 0);
    return UpdateDomainNameRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainNameRequest = UpdateDomainNameRequest;
var UpdateDomainNameResponse = /** @class */ (function (_super) {
    __extends(UpdateDomainNameResponse, _super);
    function UpdateDomainNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateDomainNameResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateDomainNameResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDomainNameResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateDomainNameResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDomainNameResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateDomainNameResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateDomainNameResponse)
    ], UpdateDomainNameResponse.prototype, "updateDomainNameResponse", void 0);
    return UpdateDomainNameResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateDomainNameResponse = UpdateDomainNameResponse;
