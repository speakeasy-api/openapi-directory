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
exports.CreateInAppTemplateResponse = exports.CreateInAppTemplateRequest = exports.CreateInAppTemplateRequestBody = exports.CreateInAppTemplateRequestBodyInAppTemplateRequest = exports.CreateInAppTemplateHeaders = exports.CreateInAppTemplatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateInAppTemplatePathParams = /** @class */ (function (_super) {
    __extends(CreateInAppTemplatePathParams, _super);
    function CreateInAppTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], CreateInAppTemplatePathParams.prototype, "templateName", void 0);
    return CreateInAppTemplatePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateInAppTemplatePathParams = CreateInAppTemplatePathParams;
var CreateInAppTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateInAppTemplateHeaders, _super);
    function CreateInAppTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateInAppTemplateHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateInAppTemplateHeaders = CreateInAppTemplateHeaders;
// CreateInAppTemplateRequestBodyInAppTemplateRequest
/**
 * InApp Template Request.
**/
var CreateInAppTemplateRequestBodyInAppTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateInAppTemplateRequestBodyInAppTemplateRequest, _super);
    function CreateInAppTemplateRequestBodyInAppTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Content", elemType: shared.InAppMessageContent }),
        __metadata("design:type", Array)
    ], CreateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomConfig" }),
        __metadata("design:type", Object)
    ], CreateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "customConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Layout" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "layout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], CreateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "tags", void 0);
    return CreateInAppTemplateRequestBodyInAppTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.CreateInAppTemplateRequestBodyInAppTemplateRequest = CreateInAppTemplateRequestBodyInAppTemplateRequest;
var CreateInAppTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateInAppTemplateRequestBody, _super);
    function CreateInAppTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InAppTemplateRequest" }),
        __metadata("design:type", CreateInAppTemplateRequestBodyInAppTemplateRequest)
    ], CreateInAppTemplateRequestBody.prototype, "inAppTemplateRequest", void 0);
    return CreateInAppTemplateRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateInAppTemplateRequestBody = CreateInAppTemplateRequestBody;
var CreateInAppTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateInAppTemplateRequest, _super);
    function CreateInAppTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateInAppTemplatePathParams)
    ], CreateInAppTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateInAppTemplateHeaders)
    ], CreateInAppTemplateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateInAppTemplateRequestBody)
    ], CreateInAppTemplateRequest.prototype, "request", void 0);
    return CreateInAppTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.CreateInAppTemplateRequest = CreateInAppTemplateRequest;
var CreateInAppTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateInAppTemplateResponse, _super);
    function CreateInAppTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInAppTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateInAppTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateInAppTemplateResponse)
    ], CreateInAppTemplateResponse.prototype, "createInAppTemplateResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInAppTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInAppTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInAppTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateInAppTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInAppTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return CreateInAppTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.CreateInAppTemplateResponse = CreateInAppTemplateResponse;
