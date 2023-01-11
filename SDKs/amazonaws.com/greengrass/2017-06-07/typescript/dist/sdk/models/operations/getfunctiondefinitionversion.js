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
exports.GetFunctionDefinitionVersionResponse = exports.GetFunctionDefinitionVersionRequest = exports.GetFunctionDefinitionVersionHeaders = exports.GetFunctionDefinitionVersionQueryParams = exports.GetFunctionDefinitionVersionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetFunctionDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(GetFunctionDefinitionVersionPathParams, _super);
    function GetFunctionDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionPathParams.prototype, "functionDefinitionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionVersionId" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionPathParams.prototype, "functionDefinitionVersionId", void 0);
    return GetFunctionDefinitionVersionPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFunctionDefinitionVersionPathParams = GetFunctionDefinitionVersionPathParams;
var GetFunctionDefinitionVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetFunctionDefinitionVersionQueryParams, _super);
    function GetFunctionDefinitionVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionQueryParams.prototype, "nextToken", void 0);
    return GetFunctionDefinitionVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFunctionDefinitionVersionQueryParams = GetFunctionDefinitionVersionQueryParams;
var GetFunctionDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(GetFunctionDefinitionVersionHeaders, _super);
    function GetFunctionDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFunctionDefinitionVersionHeaders;
}(utils_1.SpeakeasyBase));
exports.GetFunctionDefinitionVersionHeaders = GetFunctionDefinitionVersionHeaders;
var GetFunctionDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(GetFunctionDefinitionVersionRequest, _super);
    function GetFunctionDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFunctionDefinitionVersionPathParams)
    ], GetFunctionDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFunctionDefinitionVersionQueryParams)
    ], GetFunctionDefinitionVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFunctionDefinitionVersionHeaders)
    ], GetFunctionDefinitionVersionRequest.prototype, "headers", void 0);
    return GetFunctionDefinitionVersionRequest;
}(utils_1.SpeakeasyBase));
exports.GetFunctionDefinitionVersionRequest = GetFunctionDefinitionVersionRequest;
var GetFunctionDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(GetFunctionDefinitionVersionResponse, _super);
    function GetFunctionDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFunctionDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFunctionDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetFunctionDefinitionVersionResponse)
    ], GetFunctionDefinitionVersionResponse.prototype, "getFunctionDefinitionVersionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFunctionDefinitionVersionResponse.prototype, "statusCode", void 0);
    return GetFunctionDefinitionVersionResponse;
}(utils_1.SpeakeasyBase));
exports.GetFunctionDefinitionVersionResponse = GetFunctionDefinitionVersionResponse;
