"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PostApiV1ClipsResponse = exports.PostApiV1ClipsRequestBody = exports.PostApiV1ClipsRequestBodyData = exports.PostApiV1ClipsRequestBodyDataAttributes = exports.PostApiV1ClipsSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var PostApiV1ClipsSecurity = /** @class */ (function (_super) {
    __extends(PostApiV1ClipsSecurity, _super);
    function PostApiV1ClipsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
        }),
        __metadata("design:type", String)
    ], PostApiV1ClipsSecurity.prototype, "bearerHeader", void 0);
    return PostApiV1ClipsSecurity;
}(utils_1.SpeakeasyBase));
exports.PostApiV1ClipsSecurity = PostApiV1ClipsSecurity;
var PostApiV1ClipsRequestBodyDataAttributes = /** @class */ (function (_super) {
    __extends(PostApiV1ClipsRequestBodyDataAttributes, _super);
    function PostApiV1ClipsRequestBodyDataAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "end_time" }),
        __metadata("design:type", Number)
    ], PostApiV1ClipsRequestBodyDataAttributes.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "media_id" }),
        __metadata("design:type", String)
    ], PostApiV1ClipsRequestBodyDataAttributes.prototype, "mediaId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], PostApiV1ClipsRequestBodyDataAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "start_time" }),
        __metadata("design:type", Number)
    ], PostApiV1ClipsRequestBodyDataAttributes.prototype, "startTime", void 0);
    return PostApiV1ClipsRequestBodyDataAttributes;
}(utils_1.SpeakeasyBase));
exports.PostApiV1ClipsRequestBodyDataAttributes = PostApiV1ClipsRequestBodyDataAttributes;
var PostApiV1ClipsRequestBodyData = /** @class */ (function (_super) {
    __extends(PostApiV1ClipsRequestBodyData, _super);
    function PostApiV1ClipsRequestBodyData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "attributes" }),
        (0, class_transformer_1.Type)(function () { return PostApiV1ClipsRequestBodyDataAttributes; }),
        __metadata("design:type", PostApiV1ClipsRequestBodyDataAttributes)
    ], PostApiV1ClipsRequestBodyData.prototype, "attributes", void 0);
    return PostApiV1ClipsRequestBodyData;
}(utils_1.SpeakeasyBase));
exports.PostApiV1ClipsRequestBodyData = PostApiV1ClipsRequestBodyData;
var PostApiV1ClipsRequestBody = /** @class */ (function (_super) {
    __extends(PostApiV1ClipsRequestBody, _super);
    function PostApiV1ClipsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "data" }),
        (0, class_transformer_1.Type)(function () { return PostApiV1ClipsRequestBodyData; }),
        __metadata("design:type", PostApiV1ClipsRequestBodyData)
    ], PostApiV1ClipsRequestBody.prototype, "data", void 0);
    return PostApiV1ClipsRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostApiV1ClipsRequestBody = PostApiV1ClipsRequestBody;
var PostApiV1ClipsResponse = /** @class */ (function (_super) {
    __extends(PostApiV1ClipsResponse, _super);
    function PostApiV1ClipsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostApiV1ClipsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostApiV1ClipsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostApiV1ClipsResponse.prototype, "rawResponse", void 0);
    return PostApiV1ClipsResponse;
}(utils_1.SpeakeasyBase));
exports.PostApiV1ClipsResponse = PostApiV1ClipsResponse;
