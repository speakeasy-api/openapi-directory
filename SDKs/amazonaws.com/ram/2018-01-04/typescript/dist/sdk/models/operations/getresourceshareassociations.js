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
exports.GetResourceShareAssociationsResponse = exports.GetResourceShareAssociationsRequest = exports.GetResourceShareAssociationsRequestBody = exports.GetResourceShareAssociationsRequestBodyAssociationTypeEnum = exports.GetResourceShareAssociationsRequestBodyAssociationStatusEnum = exports.GetResourceShareAssociationsHeaders = exports.GetResourceShareAssociationsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetResourceShareAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetResourceShareAssociationsQueryParams, _super);
    function GetResourceShareAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsQueryParams.prototype, "nextToken", void 0);
    return GetResourceShareAssociationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareAssociationsQueryParams = GetResourceShareAssociationsQueryParams;
var GetResourceShareAssociationsHeaders = /** @class */ (function (_super) {
    __extends(GetResourceShareAssociationsHeaders, _super);
    function GetResourceShareAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResourceShareAssociationsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareAssociationsHeaders = GetResourceShareAssociationsHeaders;
var GetResourceShareAssociationsRequestBodyAssociationStatusEnum;
(function (GetResourceShareAssociationsRequestBodyAssociationStatusEnum) {
    GetResourceShareAssociationsRequestBodyAssociationStatusEnum["Associating"] = "ASSOCIATING";
    GetResourceShareAssociationsRequestBodyAssociationStatusEnum["Associated"] = "ASSOCIATED";
    GetResourceShareAssociationsRequestBodyAssociationStatusEnum["Failed"] = "FAILED";
    GetResourceShareAssociationsRequestBodyAssociationStatusEnum["Disassociating"] = "DISASSOCIATING";
    GetResourceShareAssociationsRequestBodyAssociationStatusEnum["Disassociated"] = "DISASSOCIATED";
})(GetResourceShareAssociationsRequestBodyAssociationStatusEnum = exports.GetResourceShareAssociationsRequestBodyAssociationStatusEnum || (exports.GetResourceShareAssociationsRequestBodyAssociationStatusEnum = {}));
var GetResourceShareAssociationsRequestBodyAssociationTypeEnum;
(function (GetResourceShareAssociationsRequestBodyAssociationTypeEnum) {
    GetResourceShareAssociationsRequestBodyAssociationTypeEnum["Principal"] = "PRINCIPAL";
    GetResourceShareAssociationsRequestBodyAssociationTypeEnum["Resource"] = "RESOURCE";
})(GetResourceShareAssociationsRequestBodyAssociationTypeEnum = exports.GetResourceShareAssociationsRequestBodyAssociationTypeEnum || (exports.GetResourceShareAssociationsRequestBodyAssociationTypeEnum = {}));
var GetResourceShareAssociationsRequestBody = /** @class */ (function (_super) {
    __extends(GetResourceShareAssociationsRequestBody, _super);
    function GetResourceShareAssociationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associationStatus" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsRequestBody.prototype, "associationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associationType" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsRequestBody.prototype, "associationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], GetResourceShareAssociationsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=principal" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsRequestBody.prototype, "principal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceArn" }),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsRequestBody.prototype, "resourceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceShareArns" }),
        __metadata("design:type", Array)
    ], GetResourceShareAssociationsRequestBody.prototype, "resourceShareArns", void 0);
    return GetResourceShareAssociationsRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareAssociationsRequestBody = GetResourceShareAssociationsRequestBody;
var GetResourceShareAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetResourceShareAssociationsRequest, _super);
    function GetResourceShareAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResourceShareAssociationsQueryParams)
    ], GetResourceShareAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResourceShareAssociationsHeaders)
    ], GetResourceShareAssociationsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetResourceShareAssociationsRequestBody)
    ], GetResourceShareAssociationsRequest.prototype, "request", void 0);
    return GetResourceShareAssociationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareAssociationsRequest = GetResourceShareAssociationsRequest;
var GetResourceShareAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetResourceShareAssociationsResponse, _super);
    function GetResourceShareAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResourceShareAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetResourceShareAssociationsResponse)
    ], GetResourceShareAssociationsResponse.prototype, "getResourceShareAssociationsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareAssociationsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareAssociationsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareAssociationsResponse.prototype, "malformedArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareAssociationsResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareAssociationsResponse.prototype, "serverInternalException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareAssociationsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResourceShareAssociationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareAssociationsResponse.prototype, "unknownResourceException", void 0);
    return GetResourceShareAssociationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareAssociationsResponse = GetResourceShareAssociationsResponse;
