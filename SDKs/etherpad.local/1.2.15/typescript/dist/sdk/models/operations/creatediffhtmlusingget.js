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
exports.CreateDiffHTMLUsingGETResponse = exports.CreateDiffHTMLUsingGet200ApplicationJSON = exports.CreateDiffHTMLUsingGet400ApplicationJSON = exports.CreateDiffHTMLUsingGet401ApplicationJSON = exports.CreateDiffHTMLUsingGet500ApplicationJSON = exports.CreateDiffHTMLUsingGETRequest = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var CreateDiffHTMLUsingGETRequest = /** @class */ (function (_super) {
    __extends(CreateDiffHTMLUsingGETRequest, _super);
    function CreateDiffHTMLUsingGETRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=endRev",
        }),
        __metadata("design:type", String)
    ], CreateDiffHTMLUsingGETRequest.prototype, "endRev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], CreateDiffHTMLUsingGETRequest.prototype, "padID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=startRev",
        }),
        __metadata("design:type", String)
    ], CreateDiffHTMLUsingGETRequest.prototype, "startRev", void 0);
    return CreateDiffHTMLUsingGETRequest;
}(utils_1.SpeakeasyBase));
exports.CreateDiffHTMLUsingGETRequest = CreateDiffHTMLUsingGETRequest;
/**
 * internal api error (code 2)
 */
var CreateDiffHTMLUsingGet500ApplicationJSON = /** @class */ (function (_super) {
    __extends(CreateDiffHTMLUsingGet500ApplicationJSON, _super);
    function CreateDiffHTMLUsingGet500ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", Number)
    ], CreateDiffHTMLUsingGet500ApplicationJSON.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "data" }),
        __metadata("design:type", Object)
    ], CreateDiffHTMLUsingGet500ApplicationJSON.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], CreateDiffHTMLUsingGet500ApplicationJSON.prototype, "message", void 0);
    return CreateDiffHTMLUsingGet500ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.CreateDiffHTMLUsingGet500ApplicationJSON = CreateDiffHTMLUsingGet500ApplicationJSON;
/**
 * no or wrong API key (code 4)
 */
var CreateDiffHTMLUsingGet401ApplicationJSON = /** @class */ (function (_super) {
    __extends(CreateDiffHTMLUsingGet401ApplicationJSON, _super);
    function CreateDiffHTMLUsingGet401ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", Number)
    ], CreateDiffHTMLUsingGet401ApplicationJSON.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "data" }),
        __metadata("design:type", Object)
    ], CreateDiffHTMLUsingGet401ApplicationJSON.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], CreateDiffHTMLUsingGet401ApplicationJSON.prototype, "message", void 0);
    return CreateDiffHTMLUsingGet401ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.CreateDiffHTMLUsingGet401ApplicationJSON = CreateDiffHTMLUsingGet401ApplicationJSON;
/**
 * generic api error (code 1)
 */
var CreateDiffHTMLUsingGet400ApplicationJSON = /** @class */ (function (_super) {
    __extends(CreateDiffHTMLUsingGet400ApplicationJSON, _super);
    function CreateDiffHTMLUsingGet400ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", Number)
    ], CreateDiffHTMLUsingGet400ApplicationJSON.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "data" }),
        __metadata("design:type", Object)
    ], CreateDiffHTMLUsingGet400ApplicationJSON.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], CreateDiffHTMLUsingGet400ApplicationJSON.prototype, "message", void 0);
    return CreateDiffHTMLUsingGet400ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.CreateDiffHTMLUsingGet400ApplicationJSON = CreateDiffHTMLUsingGet400ApplicationJSON;
/**
 * ok (code 0)
 */
var CreateDiffHTMLUsingGet200ApplicationJSON = /** @class */ (function (_super) {
    __extends(CreateDiffHTMLUsingGet200ApplicationJSON, _super);
    function CreateDiffHTMLUsingGet200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", Number)
    ], CreateDiffHTMLUsingGet200ApplicationJSON.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "data" }),
        __metadata("design:type", Object)
    ], CreateDiffHTMLUsingGet200ApplicationJSON.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], CreateDiffHTMLUsingGet200ApplicationJSON.prototype, "message", void 0);
    return CreateDiffHTMLUsingGet200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.CreateDiffHTMLUsingGet200ApplicationJSON = CreateDiffHTMLUsingGet200ApplicationJSON;
var CreateDiffHTMLUsingGETResponse = /** @class */ (function (_super) {
    __extends(CreateDiffHTMLUsingGETResponse, _super);
    function CreateDiffHTMLUsingGETResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateDiffHTMLUsingGETResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateDiffHTMLUsingGETResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDiffHTMLUsingGETResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDiffHTMLUsingGet200ApplicationJSON)
    ], CreateDiffHTMLUsingGETResponse.prototype, "createDiffHTMLUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDiffHTMLUsingGet400ApplicationJSON)
    ], CreateDiffHTMLUsingGETResponse.prototype, "createDiffHTMLUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDiffHTMLUsingGet401ApplicationJSON)
    ], CreateDiffHTMLUsingGETResponse.prototype, "createDiffHTMLUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDiffHTMLUsingGet500ApplicationJSON)
    ], CreateDiffHTMLUsingGETResponse.prototype, "createDiffHTMLUsingGET500ApplicationJSONObject", void 0);
    return CreateDiffHTMLUsingGETResponse;
}(utils_1.SpeakeasyBase));
exports.CreateDiffHTMLUsingGETResponse = CreateDiffHTMLUsingGETResponse;
