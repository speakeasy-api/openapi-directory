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
exports.CreateCustomPluginResponse = exports.CreateCustomPluginRequest = exports.CreateCustomPluginRequestBody = exports.CreateCustomPluginRequestBodyLocation = exports.CreateCustomPluginRequestBodyContentTypeEnum = exports.CreateCustomPluginHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateCustomPluginHeaders = /** @class */ (function (_super) {
    __extends(CreateCustomPluginHeaders, _super);
    function CreateCustomPluginHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCustomPluginHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCustomPluginHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCustomPluginHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCustomPluginHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCustomPluginHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCustomPluginHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCustomPluginHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCustomPluginHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateCustomPluginHeaders = CreateCustomPluginHeaders;
var CreateCustomPluginRequestBodyContentTypeEnum;
(function (CreateCustomPluginRequestBodyContentTypeEnum) {
    CreateCustomPluginRequestBodyContentTypeEnum["Jar"] = "JAR";
    CreateCustomPluginRequestBodyContentTypeEnum["Zip"] = "ZIP";
})(CreateCustomPluginRequestBodyContentTypeEnum = exports.CreateCustomPluginRequestBodyContentTypeEnum || (exports.CreateCustomPluginRequestBodyContentTypeEnum = {}));
// CreateCustomPluginRequestBodyLocation
/**
 * Information about the location of a custom plugin.
**/
var CreateCustomPluginRequestBodyLocation = /** @class */ (function (_super) {
    __extends(CreateCustomPluginRequestBodyLocation, _super);
    function CreateCustomPluginRequestBodyLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=s3Location" }),
        __metadata("design:type", shared.S3Location)
    ], CreateCustomPluginRequestBodyLocation.prototype, "s3Location", void 0);
    return CreateCustomPluginRequestBodyLocation;
}(utils_1.SpeakeasyBase));
exports.CreateCustomPluginRequestBodyLocation = CreateCustomPluginRequestBodyLocation;
var CreateCustomPluginRequestBody = /** @class */ (function (_super) {
    __extends(CreateCustomPluginRequestBody, _super);
    function CreateCustomPluginRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], CreateCustomPluginRequestBody.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateCustomPluginRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", CreateCustomPluginRequestBodyLocation)
    ], CreateCustomPluginRequestBody.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCustomPluginRequestBody.prototype, "name", void 0);
    return CreateCustomPluginRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateCustomPluginRequestBody = CreateCustomPluginRequestBody;
var CreateCustomPluginRequest = /** @class */ (function (_super) {
    __extends(CreateCustomPluginRequest, _super);
    function CreateCustomPluginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCustomPluginHeaders)
    ], CreateCustomPluginRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCustomPluginRequestBody)
    ], CreateCustomPluginRequest.prototype, "request", void 0);
    return CreateCustomPluginRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCustomPluginRequest = CreateCustomPluginRequest;
var CreateCustomPluginResponse = /** @class */ (function (_super) {
    __extends(CreateCustomPluginResponse, _super);
    function CreateCustomPluginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCustomPluginResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCustomPluginResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCustomPluginResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateCustomPluginResponse)
    ], CreateCustomPluginResponse.prototype, "createCustomPluginResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCustomPluginResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCustomPluginResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCustomPluginResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCustomPluginResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateCustomPluginResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCustomPluginResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCustomPluginResponse.prototype, "unauthorizedException", void 0);
    return CreateCustomPluginResponse;
}(utils_1.SpeakeasyBase));
exports.CreateCustomPluginResponse = CreateCustomPluginResponse;
