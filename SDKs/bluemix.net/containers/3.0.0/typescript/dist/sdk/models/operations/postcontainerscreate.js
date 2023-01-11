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
exports.PostContainersCreateResponse = exports.PostContainersCreateRequest = exports.PostContainersCreateHeaders = exports.PostContainersCreateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostContainersCreateQueryParams = /** @class */ (function (_super) {
    __extends(PostContainersCreateQueryParams, _super);
    function PostContainersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PostContainersCreateQueryParams.prototype, "name", void 0);
    return PostContainersCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostContainersCreateQueryParams = PostContainersCreateQueryParams;
var PostContainersCreateHeaders = /** @class */ (function (_super) {
    __extends(PostContainersCreateHeaders, _super);
    function PostContainersCreateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostContainersCreateHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostContainersCreateHeaders.prototype, "xAuthToken", void 0);
    return PostContainersCreateHeaders;
}(utils_1.SpeakeasyBase));
exports.PostContainersCreateHeaders = PostContainersCreateHeaders;
var PostContainersCreateRequest = /** @class */ (function (_super) {
    __extends(PostContainersCreateRequest, _super);
    function PostContainersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostContainersCreateQueryParams)
    ], PostContainersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostContainersCreateHeaders)
    ], PostContainersCreateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostContainersCreateRequest.prototype, "request", void 0);
    return PostContainersCreateRequest;
}(utils_1.SpeakeasyBase));
exports.PostContainersCreateRequest = PostContainersCreateRequest;
var PostContainersCreateResponse = /** @class */ (function (_super) {
    __extends(PostContainersCreateResponse, _super);
    function PostContainersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostContainersCreateResponse.prototype, "containerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostContainersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostContainersCreateResponse.prototype, "statusCode", void 0);
    return PostContainersCreateResponse;
}(utils_1.SpeakeasyBase));
exports.PostContainersCreateResponse = PostContainersCreateResponse;
