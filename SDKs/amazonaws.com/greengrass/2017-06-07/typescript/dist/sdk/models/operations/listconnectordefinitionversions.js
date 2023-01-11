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
exports.ListConnectorDefinitionVersionsResponse = exports.ListConnectorDefinitionVersionsRequest = exports.ListConnectorDefinitionVersionsHeaders = exports.ListConnectorDefinitionVersionsQueryParams = exports.ListConnectorDefinitionVersionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListConnectorDefinitionVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsPathParams, _super);
    function ListConnectorDefinitionVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConnectorDefinitionId" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsPathParams.prototype, "connectorDefinitionId", void 0);
    return ListConnectorDefinitionVersionsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListConnectorDefinitionVersionsPathParams = ListConnectorDefinitionVersionsPathParams;
var ListConnectorDefinitionVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsQueryParams, _super);
    function ListConnectorDefinitionVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsQueryParams.prototype, "nextToken", void 0);
    return ListConnectorDefinitionVersionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListConnectorDefinitionVersionsQueryParams = ListConnectorDefinitionVersionsQueryParams;
var ListConnectorDefinitionVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsHeaders, _super);
    function ListConnectorDefinitionVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListConnectorDefinitionVersionsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListConnectorDefinitionVersionsHeaders = ListConnectorDefinitionVersionsHeaders;
var ListConnectorDefinitionVersionsRequest = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsRequest, _super);
    function ListConnectorDefinitionVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectorDefinitionVersionsPathParams)
    ], ListConnectorDefinitionVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectorDefinitionVersionsQueryParams)
    ], ListConnectorDefinitionVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectorDefinitionVersionsHeaders)
    ], ListConnectorDefinitionVersionsRequest.prototype, "headers", void 0);
    return ListConnectorDefinitionVersionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListConnectorDefinitionVersionsRequest = ListConnectorDefinitionVersionsRequest;
var ListConnectorDefinitionVersionsResponse = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsResponse, _super);
    function ListConnectorDefinitionVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListConnectorDefinitionVersionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConnectorDefinitionVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListConnectorDefinitionVersionsResponse)
    ], ListConnectorDefinitionVersionsResponse.prototype, "listConnectorDefinitionVersionsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListConnectorDefinitionVersionsResponse.prototype, "statusCode", void 0);
    return ListConnectorDefinitionVersionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListConnectorDefinitionVersionsResponse = ListConnectorDefinitionVersionsResponse;
