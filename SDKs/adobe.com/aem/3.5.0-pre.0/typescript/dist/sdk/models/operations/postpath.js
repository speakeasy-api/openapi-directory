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
exports.PostPathResponse = exports.PostPathRequest = exports.PostPathQueryParams = exports.PostPathPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostPathPathParams = /** @class */ (function (_super) {
    __extends(PostPathPathParams, _super);
    function PostPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], PostPathPathParams.prototype, "path", void 0);
    return PostPathPathParams;
}(utils_1.SpeakeasyBase));
exports.PostPathPathParams = PostPathPathParams;
var PostPathQueryParams = /** @class */ (function (_super) {
    __extends(PostPathQueryParams, _super);
    function PostPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=:name" }),
        __metadata("design:type", String)
    ], PostPathQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=jcr:primaryType" }),
        __metadata("design:type", String)
    ], PostPathQueryParams.prototype, "jcrPrimaryType", void 0);
    return PostPathQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostPathQueryParams = PostPathQueryParams;
var PostPathRequest = /** @class */ (function (_super) {
    __extends(PostPathRequest, _super);
    function PostPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPathPathParams)
    ], PostPathRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPathQueryParams)
    ], PostPathRequest.prototype, "queryParams", void 0);
    return PostPathRequest;
}(utils_1.SpeakeasyBase));
exports.PostPathRequest = PostPathRequest;
var PostPathResponse = /** @class */ (function (_super) {
    __extends(PostPathResponse, _super);
    function PostPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPathResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPathResponse.prototype, "statusCode", void 0);
    return PostPathResponse;
}(utils_1.SpeakeasyBase));
exports.PostPathResponse = PostPathResponse;
