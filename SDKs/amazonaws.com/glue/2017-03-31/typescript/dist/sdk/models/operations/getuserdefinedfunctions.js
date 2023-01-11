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
exports.GetUserDefinedFunctionsResponse = exports.GetUserDefinedFunctionsRequest = exports.GetUserDefinedFunctionsHeaders = exports.GetUserDefinedFunctionsXAmzTargetEnum = exports.GetUserDefinedFunctionsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUserDefinedFunctionsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserDefinedFunctionsQueryParams, _super);
    function GetUserDefinedFunctionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsQueryParams.prototype, "nextToken", void 0);
    return GetUserDefinedFunctionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUserDefinedFunctionsQueryParams = GetUserDefinedFunctionsQueryParams;
var GetUserDefinedFunctionsXAmzTargetEnum;
(function (GetUserDefinedFunctionsXAmzTargetEnum) {
    GetUserDefinedFunctionsXAmzTargetEnum["AwsGlueGetUserDefinedFunctions"] = "AWSGlue.GetUserDefinedFunctions";
})(GetUserDefinedFunctionsXAmzTargetEnum = exports.GetUserDefinedFunctionsXAmzTargetEnum || (exports.GetUserDefinedFunctionsXAmzTargetEnum = {}));
var GetUserDefinedFunctionsHeaders = /** @class */ (function (_super) {
    __extends(GetUserDefinedFunctionsHeaders, _super);
    function GetUserDefinedFunctionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsHeaders.prototype, "xAmzTarget", void 0);
    return GetUserDefinedFunctionsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetUserDefinedFunctionsHeaders = GetUserDefinedFunctionsHeaders;
var GetUserDefinedFunctionsRequest = /** @class */ (function (_super) {
    __extends(GetUserDefinedFunctionsRequest, _super);
    function GetUserDefinedFunctionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserDefinedFunctionsQueryParams)
    ], GetUserDefinedFunctionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserDefinedFunctionsHeaders)
    ], GetUserDefinedFunctionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetUserDefinedFunctionsRequest)
    ], GetUserDefinedFunctionsRequest.prototype, "request", void 0);
    return GetUserDefinedFunctionsRequest;
}(utils_1.SpeakeasyBase));
exports.GetUserDefinedFunctionsRequest = GetUserDefinedFunctionsRequest;
var GetUserDefinedFunctionsResponse = /** @class */ (function (_super) {
    __extends(GetUserDefinedFunctionsResponse, _super);
    function GetUserDefinedFunctionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUserDefinedFunctionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUserDefinedFunctionsResponse.prototype, "entityNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetUserDefinedFunctionsResponse)
    ], GetUserDefinedFunctionsResponse.prototype, "getUserDefinedFunctionsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUserDefinedFunctionsResponse.prototype, "glueEncryptionException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUserDefinedFunctionsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUserDefinedFunctionsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUserDefinedFunctionsResponse.prototype, "operationTimeoutException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUserDefinedFunctionsResponse.prototype, "statusCode", void 0);
    return GetUserDefinedFunctionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetUserDefinedFunctionsResponse = GetUserDefinedFunctionsResponse;
