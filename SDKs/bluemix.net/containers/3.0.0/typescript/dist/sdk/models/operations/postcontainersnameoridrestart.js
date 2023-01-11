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
exports.PostContainersNameOrIdRestartResponse = exports.PostContainersNameOrIdRestartRequest = exports.PostContainersNameOrIdRestartHeaders = exports.PostContainersNameOrIdRestartQueryParams = exports.PostContainersNameOrIdRestartPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostContainersNameOrIdRestartPathParams = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRestartPathParams, _super);
    function PostContainersNameOrIdRestartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRestartPathParams.prototype, "nameOrId", void 0);
    return PostContainersNameOrIdRestartPathParams;
}(utils_1.SpeakeasyBase));
exports.PostContainersNameOrIdRestartPathParams = PostContainersNameOrIdRestartPathParams;
var PostContainersNameOrIdRestartQueryParams = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRestartQueryParams, _super);
    function PostContainersNameOrIdRestartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t" }),
        __metadata("design:type", Number)
    ], PostContainersNameOrIdRestartQueryParams.prototype, "t", void 0);
    return PostContainersNameOrIdRestartQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostContainersNameOrIdRestartQueryParams = PostContainersNameOrIdRestartQueryParams;
var PostContainersNameOrIdRestartHeaders = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRestartHeaders, _super);
    function PostContainersNameOrIdRestartHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRestartHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRestartHeaders.prototype, "xAuthToken", void 0);
    return PostContainersNameOrIdRestartHeaders;
}(utils_1.SpeakeasyBase));
exports.PostContainersNameOrIdRestartHeaders = PostContainersNameOrIdRestartHeaders;
var PostContainersNameOrIdRestartRequest = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRestartRequest, _super);
    function PostContainersNameOrIdRestartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostContainersNameOrIdRestartPathParams)
    ], PostContainersNameOrIdRestartRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostContainersNameOrIdRestartQueryParams)
    ], PostContainersNameOrIdRestartRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostContainersNameOrIdRestartHeaders)
    ], PostContainersNameOrIdRestartRequest.prototype, "headers", void 0);
    return PostContainersNameOrIdRestartRequest;
}(utils_1.SpeakeasyBase));
exports.PostContainersNameOrIdRestartRequest = PostContainersNameOrIdRestartRequest;
var PostContainersNameOrIdRestartResponse = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRestartResponse, _super);
    function PostContainersNameOrIdRestartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRestartResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostContainersNameOrIdRestartResponse.prototype, "statusCode", void 0);
    return PostContainersNameOrIdRestartResponse;
}(utils_1.SpeakeasyBase));
exports.PostContainersNameOrIdRestartResponse = PostContainersNameOrIdRestartResponse;
