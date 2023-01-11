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
exports.GetTranscriptResponse = exports.GetTranscriptRequest = exports.GetTranscriptRequestBody = exports.GetTranscriptRequestBodyStartPosition = exports.GetTranscriptRequestBodySortOrderEnum = exports.GetTranscriptRequestBodyScanDirectionEnum = exports.GetTranscriptHeaders = exports.GetTranscriptQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTranscriptQueryParams = /** @class */ (function (_super) {
    __extends(GetTranscriptQueryParams, _super);
    function GetTranscriptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetTranscriptQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetTranscriptQueryParams.prototype, "nextToken", void 0);
    return GetTranscriptQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTranscriptQueryParams = GetTranscriptQueryParams;
var GetTranscriptHeaders = /** @class */ (function (_super) {
    __extends(GetTranscriptHeaders, _super);
    function GetTranscriptHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Bearer" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzBearer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetTranscriptHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetTranscriptHeaders;
}(utils_1.SpeakeasyBase));
exports.GetTranscriptHeaders = GetTranscriptHeaders;
var GetTranscriptRequestBodyScanDirectionEnum;
(function (GetTranscriptRequestBodyScanDirectionEnum) {
    GetTranscriptRequestBodyScanDirectionEnum["Forward"] = "FORWARD";
    GetTranscriptRequestBodyScanDirectionEnum["Backward"] = "BACKWARD";
})(GetTranscriptRequestBodyScanDirectionEnum = exports.GetTranscriptRequestBodyScanDirectionEnum || (exports.GetTranscriptRequestBodyScanDirectionEnum = {}));
var GetTranscriptRequestBodySortOrderEnum;
(function (GetTranscriptRequestBodySortOrderEnum) {
    GetTranscriptRequestBodySortOrderEnum["Descending"] = "DESCENDING";
    GetTranscriptRequestBodySortOrderEnum["Ascending"] = "ASCENDING";
})(GetTranscriptRequestBodySortOrderEnum = exports.GetTranscriptRequestBodySortOrderEnum || (exports.GetTranscriptRequestBodySortOrderEnum = {}));
// GetTranscriptRequestBodyStartPosition
/**
 * A filtering option for where to start. For example, if you sent 100 messages, start with message 50.
**/
var GetTranscriptRequestBodyStartPosition = /** @class */ (function (_super) {
    __extends(GetTranscriptRequestBodyStartPosition, _super);
    function GetTranscriptRequestBodyStartPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AbsoluteTime" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBodyStartPosition.prototype, "absoluteTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBodyStartPosition.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MostRecent" }),
        __metadata("design:type", Number)
    ], GetTranscriptRequestBodyStartPosition.prototype, "mostRecent", void 0);
    return GetTranscriptRequestBodyStartPosition;
}(utils_1.SpeakeasyBase));
exports.GetTranscriptRequestBodyStartPosition = GetTranscriptRequestBodyStartPosition;
var GetTranscriptRequestBody = /** @class */ (function (_super) {
    __extends(GetTranscriptRequestBody, _super);
    function GetTranscriptRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ContactId" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBody.prototype, "contactId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetTranscriptRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBody.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ScanDirection" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBody.prototype, "scanDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], GetTranscriptRequestBody.prototype, "sortOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StartPosition" }),
        __metadata("design:type", GetTranscriptRequestBodyStartPosition)
    ], GetTranscriptRequestBody.prototype, "startPosition", void 0);
    return GetTranscriptRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetTranscriptRequestBody = GetTranscriptRequestBody;
var GetTranscriptRequest = /** @class */ (function (_super) {
    __extends(GetTranscriptRequest, _super);
    function GetTranscriptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTranscriptQueryParams)
    ], GetTranscriptRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTranscriptHeaders)
    ], GetTranscriptRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetTranscriptRequestBody)
    ], GetTranscriptRequest.prototype, "request", void 0);
    return GetTranscriptRequest;
}(utils_1.SpeakeasyBase));
exports.GetTranscriptRequest = GetTranscriptRequest;
var GetTranscriptResponse = /** @class */ (function (_super) {
    __extends(GetTranscriptResponse, _super);
    function GetTranscriptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTranscriptResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTranscriptResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetTranscriptResponse)
    ], GetTranscriptResponse.prototype, "getTranscriptResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTranscriptResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTranscriptResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTranscriptResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTranscriptResponse.prototype, "validationException", void 0);
    return GetTranscriptResponse;
}(utils_1.SpeakeasyBase));
exports.GetTranscriptResponse = GetTranscriptResponse;
