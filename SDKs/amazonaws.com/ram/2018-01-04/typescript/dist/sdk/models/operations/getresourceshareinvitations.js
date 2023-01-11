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
exports.GetResourceShareInvitationsResponse = exports.GetResourceShareInvitationsRequest = exports.GetResourceShareInvitationsRequestBody = exports.GetResourceShareInvitationsHeaders = exports.GetResourceShareInvitationsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetResourceShareInvitationsQueryParams = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsQueryParams, _super);
    function GetResourceShareInvitationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsQueryParams.prototype, "nextToken", void 0);
    return GetResourceShareInvitationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareInvitationsQueryParams = GetResourceShareInvitationsQueryParams;
var GetResourceShareInvitationsHeaders = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsHeaders, _super);
    function GetResourceShareInvitationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResourceShareInvitationsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareInvitationsHeaders = GetResourceShareInvitationsHeaders;
var GetResourceShareInvitationsRequestBody = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsRequestBody, _super);
    function GetResourceShareInvitationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], GetResourceShareInvitationsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceShareArns" }),
        __metadata("design:type", Array)
    ], GetResourceShareInvitationsRequestBody.prototype, "resourceShareArns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceShareInvitationArns" }),
        __metadata("design:type", Array)
    ], GetResourceShareInvitationsRequestBody.prototype, "resourceShareInvitationArns", void 0);
    return GetResourceShareInvitationsRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareInvitationsRequestBody = GetResourceShareInvitationsRequestBody;
var GetResourceShareInvitationsRequest = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsRequest, _super);
    function GetResourceShareInvitationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResourceShareInvitationsQueryParams)
    ], GetResourceShareInvitationsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResourceShareInvitationsHeaders)
    ], GetResourceShareInvitationsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetResourceShareInvitationsRequestBody)
    ], GetResourceShareInvitationsRequest.prototype, "request", void 0);
    return GetResourceShareInvitationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareInvitationsRequest = GetResourceShareInvitationsRequest;
var GetResourceShareInvitationsResponse = /** @class */ (function (_super) {
    __extends(GetResourceShareInvitationsResponse, _super);
    function GetResourceShareInvitationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResourceShareInvitationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetResourceShareInvitationsResponse)
    ], GetResourceShareInvitationsResponse.prototype, "getResourceShareInvitationsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "invalidMaxResultsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "malformedArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "resourceShareInvitationArnNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "serverInternalException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResourceShareInvitationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetResourceShareInvitationsResponse.prototype, "unknownResourceException", void 0);
    return GetResourceShareInvitationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetResourceShareInvitationsResponse = GetResourceShareInvitationsResponse;
