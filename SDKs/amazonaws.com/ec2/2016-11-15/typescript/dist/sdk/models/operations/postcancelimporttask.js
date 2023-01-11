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
exports.PostCancelImportTaskResponse = exports.PostCancelImportTaskRequest = exports.PostCancelImportTaskHeaders = exports.PostCancelImportTaskQueryParams = exports.PostCancelImportTaskVersionEnum = exports.PostCancelImportTaskActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCancelImportTaskActionEnum;
(function (PostCancelImportTaskActionEnum) {
    PostCancelImportTaskActionEnum["CancelImportTask"] = "CancelImportTask";
})(PostCancelImportTaskActionEnum = exports.PostCancelImportTaskActionEnum || (exports.PostCancelImportTaskActionEnum = {}));
var PostCancelImportTaskVersionEnum;
(function (PostCancelImportTaskVersionEnum) {
    PostCancelImportTaskVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCancelImportTaskVersionEnum = exports.PostCancelImportTaskVersionEnum || (exports.PostCancelImportTaskVersionEnum = {}));
var PostCancelImportTaskQueryParams = /** @class */ (function (_super) {
    __extends(PostCancelImportTaskQueryParams, _super);
    function PostCancelImportTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskQueryParams.prototype, "version", void 0);
    return PostCancelImportTaskQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCancelImportTaskQueryParams = PostCancelImportTaskQueryParams;
var PostCancelImportTaskHeaders = /** @class */ (function (_super) {
    __extends(PostCancelImportTaskHeaders, _super);
    function PostCancelImportTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCancelImportTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCancelImportTaskHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCancelImportTaskHeaders = PostCancelImportTaskHeaders;
var PostCancelImportTaskRequest = /** @class */ (function (_super) {
    __extends(PostCancelImportTaskRequest, _super);
    function PostCancelImportTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCancelImportTaskQueryParams)
    ], PostCancelImportTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCancelImportTaskHeaders)
    ], PostCancelImportTaskRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCancelImportTaskRequest.prototype, "request", void 0);
    return PostCancelImportTaskRequest;
}(utils_1.SpeakeasyBase));
exports.PostCancelImportTaskRequest = PostCancelImportTaskRequest;
var PostCancelImportTaskResponse = /** @class */ (function (_super) {
    __extends(PostCancelImportTaskResponse, _super);
    function PostCancelImportTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCancelImportTaskResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCancelImportTaskResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCancelImportTaskResponse.prototype, "statusCode", void 0);
    return PostCancelImportTaskResponse;
}(utils_1.SpeakeasyBase));
exports.PostCancelImportTaskResponse = PostCancelImportTaskResponse;
