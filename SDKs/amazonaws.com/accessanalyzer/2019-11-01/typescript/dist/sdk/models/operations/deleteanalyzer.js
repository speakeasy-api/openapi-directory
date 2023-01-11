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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAnalyzerResponse = exports.DeleteAnalyzerRequest = exports.DeleteAnalyzerHeaders = exports.DeleteAnalyzerQueryParams = exports.DeleteAnalyzerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteAnalyzerPathParams = /** @class */ (function (_super) {
    __extends(DeleteAnalyzerPathParams, _super);
    function DeleteAnalyzerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=analyzerName" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerPathParams.prototype, "analyzerName", void 0);
    return DeleteAnalyzerPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteAnalyzerPathParams = DeleteAnalyzerPathParams;
var DeleteAnalyzerQueryParams = /** @class */ (function (_super) {
    __extends(DeleteAnalyzerQueryParams, _super);
    function DeleteAnalyzerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientToken" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerQueryParams.prototype, "clientToken", void 0);
    return DeleteAnalyzerQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteAnalyzerQueryParams = DeleteAnalyzerQueryParams;
var DeleteAnalyzerHeaders = /** @class */ (function (_super) {
    __extends(DeleteAnalyzerHeaders, _super);
    function DeleteAnalyzerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteAnalyzerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteAnalyzerHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteAnalyzerHeaders = DeleteAnalyzerHeaders;
var DeleteAnalyzerRequest = /** @class */ (function (_super) {
    __extends(DeleteAnalyzerRequest, _super);
    function DeleteAnalyzerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAnalyzerPathParams)
    ], DeleteAnalyzerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAnalyzerQueryParams)
    ], DeleteAnalyzerRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAnalyzerHeaders)
    ], DeleteAnalyzerRequest.prototype, "headers", void 0);
    return DeleteAnalyzerRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteAnalyzerRequest = DeleteAnalyzerRequest;
var DeleteAnalyzerResponse = /** @class */ (function (_super) {
    __extends(DeleteAnalyzerResponse, _super);
    function DeleteAnalyzerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteAnalyzerResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteAnalyzerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteAnalyzerResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteAnalyzerResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteAnalyzerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteAnalyzerResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteAnalyzerResponse.prototype, "validationException", void 0);
    return DeleteAnalyzerResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteAnalyzerResponse = DeleteAnalyzerResponse;
