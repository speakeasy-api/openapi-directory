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
exports.MarkdownRenderRawResponse = exports.MarkdownRenderRawRequest = exports.MarkdownRenderRawRequests = void 0;
var utils_1 = require("../../../internal/utils");
var MarkdownRenderRawRequests = /** @class */ (function (_super) {
    __extends(MarkdownRenderRawRequests, _super);
    function MarkdownRenderRawRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/plain" }),
        __metadata("design:type", String)
    ], MarkdownRenderRawRequests.prototype, "string", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/x-markdown" }),
        __metadata("design:type", String)
    ], MarkdownRenderRawRequests.prototype, "string1", void 0);
    return MarkdownRenderRawRequests;
}(utils_1.SpeakeasyBase));
exports.MarkdownRenderRawRequests = MarkdownRenderRawRequests;
var MarkdownRenderRawRequest = /** @class */ (function (_super) {
    __extends(MarkdownRenderRawRequest, _super);
    function MarkdownRenderRawRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MarkdownRenderRawRequests)
    ], MarkdownRenderRawRequest.prototype, "request", void 0);
    return MarkdownRenderRawRequest;
}(utils_1.SpeakeasyBase));
exports.MarkdownRenderRawRequest = MarkdownRenderRawRequest;
var MarkdownRenderRawResponse = /** @class */ (function (_super) {
    __extends(MarkdownRenderRawResponse, _super);
    function MarkdownRenderRawResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MarkdownRenderRawResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MarkdownRenderRawResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MarkdownRenderRawResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MarkdownRenderRawResponse.prototype, "markdownRenderRaw200TextHTMLString", void 0);
    return MarkdownRenderRawResponse;
}(utils_1.SpeakeasyBase));
exports.MarkdownRenderRawResponse = MarkdownRenderRawResponse;
