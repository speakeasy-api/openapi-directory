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
exports.RemoveTagsFromVaultResponse = exports.RemoveTagsFromVaultRequest = exports.RemoveTagsFromVaultRequestBody = exports.RemoveTagsFromVaultHeaders = exports.RemoveTagsFromVaultQueryParams = exports.RemoveTagsFromVaultOperationEnum = exports.RemoveTagsFromVaultPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RemoveTagsFromVaultPathParams = /** @class */ (function (_super) {
    __extends(RemoveTagsFromVaultPathParams, _super);
    function RemoveTagsFromVaultPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultPathParams.prototype, "vaultName", void 0);
    return RemoveTagsFromVaultPathParams;
}(utils_1.SpeakeasyBase));
exports.RemoveTagsFromVaultPathParams = RemoveTagsFromVaultPathParams;
var RemoveTagsFromVaultOperationEnum;
(function (RemoveTagsFromVaultOperationEnum) {
    RemoveTagsFromVaultOperationEnum["Remove"] = "remove";
})(RemoveTagsFromVaultOperationEnum = exports.RemoveTagsFromVaultOperationEnum || (exports.RemoveTagsFromVaultOperationEnum = {}));
var RemoveTagsFromVaultQueryParams = /** @class */ (function (_super) {
    __extends(RemoveTagsFromVaultQueryParams, _super);
    function RemoveTagsFromVaultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=operation" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultQueryParams.prototype, "operation", void 0);
    return RemoveTagsFromVaultQueryParams;
}(utils_1.SpeakeasyBase));
exports.RemoveTagsFromVaultQueryParams = RemoveTagsFromVaultQueryParams;
var RemoveTagsFromVaultHeaders = /** @class */ (function (_super) {
    __extends(RemoveTagsFromVaultHeaders, _super);
    function RemoveTagsFromVaultHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RemoveTagsFromVaultHeaders;
}(utils_1.SpeakeasyBase));
exports.RemoveTagsFromVaultHeaders = RemoveTagsFromVaultHeaders;
var RemoveTagsFromVaultRequestBody = /** @class */ (function (_super) {
    __extends(RemoveTagsFromVaultRequestBody, _super);
    function RemoveTagsFromVaultRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TagKeys" }),
        __metadata("design:type", Array)
    ], RemoveTagsFromVaultRequestBody.prototype, "tagKeys", void 0);
    return RemoveTagsFromVaultRequestBody;
}(utils_1.SpeakeasyBase));
exports.RemoveTagsFromVaultRequestBody = RemoveTagsFromVaultRequestBody;
var RemoveTagsFromVaultRequest = /** @class */ (function (_super) {
    __extends(RemoveTagsFromVaultRequest, _super);
    function RemoveTagsFromVaultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveTagsFromVaultPathParams)
    ], RemoveTagsFromVaultRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveTagsFromVaultQueryParams)
    ], RemoveTagsFromVaultRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveTagsFromVaultHeaders)
    ], RemoveTagsFromVaultRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveTagsFromVaultRequestBody)
    ], RemoveTagsFromVaultRequest.prototype, "request", void 0);
    return RemoveTagsFromVaultRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveTagsFromVaultRequest = RemoveTagsFromVaultRequest;
var RemoveTagsFromVaultResponse = /** @class */ (function (_super) {
    __extends(RemoveTagsFromVaultResponse, _super);
    function RemoveTagsFromVaultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveTagsFromVaultResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RemoveTagsFromVaultResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RemoveTagsFromVaultResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RemoveTagsFromVaultResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RemoveTagsFromVaultResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveTagsFromVaultResponse.prototype, "statusCode", void 0);
    return RemoveTagsFromVaultResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveTagsFromVaultResponse = RemoveTagsFromVaultResponse;
