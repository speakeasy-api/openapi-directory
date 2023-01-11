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
exports.CreateChangesetResponse = exports.CreateChangesetRequest = exports.CreateChangesetRequestBody = exports.CreateChangesetRequestBodySourceTypeEnum = exports.CreateChangesetRequestBodyFormatTypeEnum = exports.CreateChangesetRequestBodyChangeTypeEnum = exports.CreateChangesetHeaders = exports.CreateChangesetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateChangesetPathParams = /** @class */ (function (_super) {
    __extends(CreateChangesetPathParams, _super);
    function CreateChangesetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], CreateChangesetPathParams.prototype, "datasetId", void 0);
    return CreateChangesetPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateChangesetPathParams = CreateChangesetPathParams;
var CreateChangesetHeaders = /** @class */ (function (_super) {
    __extends(CreateChangesetHeaders, _super);
    function CreateChangesetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateChangesetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateChangesetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateChangesetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateChangesetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateChangesetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateChangesetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateChangesetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateChangesetHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateChangesetHeaders = CreateChangesetHeaders;
var CreateChangesetRequestBodyChangeTypeEnum;
(function (CreateChangesetRequestBodyChangeTypeEnum) {
    CreateChangesetRequestBodyChangeTypeEnum["Replace"] = "REPLACE";
    CreateChangesetRequestBodyChangeTypeEnum["Append"] = "APPEND";
    CreateChangesetRequestBodyChangeTypeEnum["Modify"] = "MODIFY";
})(CreateChangesetRequestBodyChangeTypeEnum = exports.CreateChangesetRequestBodyChangeTypeEnum || (exports.CreateChangesetRequestBodyChangeTypeEnum = {}));
var CreateChangesetRequestBodyFormatTypeEnum;
(function (CreateChangesetRequestBodyFormatTypeEnum) {
    CreateChangesetRequestBodyFormatTypeEnum["Csv"] = "CSV";
    CreateChangesetRequestBodyFormatTypeEnum["Json"] = "JSON";
    CreateChangesetRequestBodyFormatTypeEnum["Parquet"] = "PARQUET";
    CreateChangesetRequestBodyFormatTypeEnum["Xml"] = "XML";
})(CreateChangesetRequestBodyFormatTypeEnum = exports.CreateChangesetRequestBodyFormatTypeEnum || (exports.CreateChangesetRequestBodyFormatTypeEnum = {}));
var CreateChangesetRequestBodySourceTypeEnum;
(function (CreateChangesetRequestBodySourceTypeEnum) {
    CreateChangesetRequestBodySourceTypeEnum["S3"] = "S3";
})(CreateChangesetRequestBodySourceTypeEnum = exports.CreateChangesetRequestBodySourceTypeEnum || (exports.CreateChangesetRequestBodySourceTypeEnum = {}));
var CreateChangesetRequestBody = /** @class */ (function (_super) {
    __extends(CreateChangesetRequestBody, _super);
    function CreateChangesetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changeType" }),
        __metadata("design:type", String)
    ], CreateChangesetRequestBody.prototype, "changeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formatParams" }),
        __metadata("design:type", Object)
    ], CreateChangesetRequestBody.prototype, "formatParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formatType" }),
        __metadata("design:type", String)
    ], CreateChangesetRequestBody.prototype, "formatType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceParams" }),
        __metadata("design:type", Object)
    ], CreateChangesetRequestBody.prototype, "sourceParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceType" }),
        __metadata("design:type", String)
    ], CreateChangesetRequestBody.prototype, "sourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateChangesetRequestBody.prototype, "tags", void 0);
    return CreateChangesetRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateChangesetRequestBody = CreateChangesetRequestBody;
var CreateChangesetRequest = /** @class */ (function (_super) {
    __extends(CreateChangesetRequest, _super);
    function CreateChangesetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateChangesetPathParams)
    ], CreateChangesetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateChangesetHeaders)
    ], CreateChangesetRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateChangesetRequestBody)
    ], CreateChangesetRequest.prototype, "request", void 0);
    return CreateChangesetRequest;
}(utils_1.SpeakeasyBase));
exports.CreateChangesetRequest = CreateChangesetRequest;
var CreateChangesetResponse = /** @class */ (function (_super) {
    __extends(CreateChangesetResponse, _super);
    function CreateChangesetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateChangesetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateChangesetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateChangesetResponse)
    ], CreateChangesetResponse.prototype, "createChangesetResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateChangesetResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateChangesetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateChangesetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateChangesetResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateChangesetResponse.prototype, "validationException", void 0);
    return CreateChangesetResponse;
}(utils_1.SpeakeasyBase));
exports.CreateChangesetResponse = CreateChangesetResponse;
