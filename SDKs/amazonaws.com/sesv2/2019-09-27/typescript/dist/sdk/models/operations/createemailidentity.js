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
exports.CreateEmailIdentityResponse = exports.CreateEmailIdentityRequest = exports.CreateEmailIdentityRequestBody = exports.CreateEmailIdentityRequestBodyDkimSigningAttributes = exports.CreateEmailIdentityHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateEmailIdentityHeaders = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityHeaders, _super);
    function CreateEmailIdentityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateEmailIdentityHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateEmailIdentityHeaders = CreateEmailIdentityHeaders;
// CreateEmailIdentityRequestBodyDkimSigningAttributes
/**
 * An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
**/
var CreateEmailIdentityRequestBodyDkimSigningAttributes = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityRequestBodyDkimSigningAttributes, _super);
    function CreateEmailIdentityRequestBodyDkimSigningAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DomainSigningPrivateKey" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityRequestBodyDkimSigningAttributes.prototype, "domainSigningPrivateKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DomainSigningSelector" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityRequestBodyDkimSigningAttributes.prototype, "domainSigningSelector", void 0);
    return CreateEmailIdentityRequestBodyDkimSigningAttributes;
}(utils_1.SpeakeasyBase));
exports.CreateEmailIdentityRequestBodyDkimSigningAttributes = CreateEmailIdentityRequestBodyDkimSigningAttributes;
var CreateEmailIdentityRequestBody = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityRequestBody, _super);
    function CreateEmailIdentityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityRequestBody.prototype, "configurationSetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DkimSigningAttributes" }),
        __metadata("design:type", CreateEmailIdentityRequestBodyDkimSigningAttributes)
    ], CreateEmailIdentityRequestBody.prototype, "dkimSigningAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailIdentity" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityRequestBody.prototype, "emailIdentity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateEmailIdentityRequestBody.prototype, "tags", void 0);
    return CreateEmailIdentityRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateEmailIdentityRequestBody = CreateEmailIdentityRequestBody;
var CreateEmailIdentityRequest = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityRequest, _super);
    function CreateEmailIdentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateEmailIdentityHeaders)
    ], CreateEmailIdentityRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEmailIdentityRequestBody)
    ], CreateEmailIdentityRequest.prototype, "request", void 0);
    return CreateEmailIdentityRequest;
}(utils_1.SpeakeasyBase));
exports.CreateEmailIdentityRequest = CreateEmailIdentityRequest;
var CreateEmailIdentityResponse = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityResponse, _super);
    function CreateEmailIdentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityResponse.prototype, "alreadyExistsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateEmailIdentityResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateEmailIdentityResponse)
    ], CreateEmailIdentityResponse.prototype, "createEmailIdentityResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateEmailIdentityResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityResponse.prototype, "tooManyRequestsException", void 0);
    return CreateEmailIdentityResponse;
}(utils_1.SpeakeasyBase));
exports.CreateEmailIdentityResponse = CreateEmailIdentityResponse;
