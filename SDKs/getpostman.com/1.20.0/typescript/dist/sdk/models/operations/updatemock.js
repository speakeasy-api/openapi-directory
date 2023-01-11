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
exports.UpdateMockResponse = exports.UpdateMockRequest = exports.UpdateMock200ApplicationJson = exports.UpdateMock200ApplicationJsonMock = exports.UpdateMock200ApplicationJsonMockConfig = exports.UpdateMockRequestBody = exports.UpdateMockRequestBodyMock = exports.UpdateMockPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateMockPathParams = /** @class */ (function (_super) {
    __extends(UpdateMockPathParams, _super);
    function UpdateMockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=mock_uid" }),
        __metadata("design:type", String)
    ], UpdateMockPathParams.prototype, "mockUid", void 0);
    return UpdateMockPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateMockPathParams = UpdateMockPathParams;
var UpdateMockRequestBodyMock = /** @class */ (function (_super) {
    __extends(UpdateMockRequestBodyMock, _super);
    function UpdateMockRequestBodyMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateMockRequestBodyMock.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], UpdateMockRequestBodyMock.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateMockRequestBodyMock.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], UpdateMockRequestBodyMock.prototype, "private", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=versionTag" }),
        __metadata("design:type", String)
    ], UpdateMockRequestBodyMock.prototype, "versionTag", void 0);
    return UpdateMockRequestBodyMock;
}(utils_1.SpeakeasyBase));
exports.UpdateMockRequestBodyMock = UpdateMockRequestBodyMock;
var UpdateMockRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMockRequestBody, _super);
    function UpdateMockRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mock" }),
        __metadata("design:type", UpdateMockRequestBodyMock)
    ], UpdateMockRequestBody.prototype, "mock", void 0);
    return UpdateMockRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateMockRequestBody = UpdateMockRequestBody;
var UpdateMock200ApplicationJsonMockConfig = /** @class */ (function (_super) {
    __extends(UpdateMock200ApplicationJsonMockConfig, _super);
    function UpdateMock200ApplicationJsonMockConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers" }),
        __metadata("design:type", Array)
    ], UpdateMock200ApplicationJsonMockConfig.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matchBody" }),
        __metadata("design:type", Boolean)
    ], UpdateMock200ApplicationJsonMockConfig.prototype, "matchBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matchQueryParams" }),
        __metadata("design:type", Boolean)
    ], UpdateMock200ApplicationJsonMockConfig.prototype, "matchQueryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matchWildcards" }),
        __metadata("design:type", Boolean)
    ], UpdateMock200ApplicationJsonMockConfig.prototype, "matchWildcards", void 0);
    return UpdateMock200ApplicationJsonMockConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateMock200ApplicationJsonMockConfig = UpdateMock200ApplicationJsonMockConfig;
var UpdateMock200ApplicationJsonMock = /** @class */ (function (_super) {
    __extends(UpdateMock200ApplicationJsonMock, _super);
    function UpdateMock200ApplicationJsonMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collection" }),
        __metadata("design:type", String)
    ], UpdateMock200ApplicationJsonMock.prototype, "collection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", UpdateMock200ApplicationJsonMockConfig)
    ], UpdateMock200ApplicationJsonMock.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], UpdateMock200ApplicationJsonMock.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateMock200ApplicationJsonMock.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mockUrl" }),
        __metadata("design:type", String)
    ], UpdateMock200ApplicationJsonMock.prototype, "mockUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateMock200ApplicationJsonMock.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], UpdateMock200ApplicationJsonMock.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], UpdateMock200ApplicationJsonMock.prototype, "uid", void 0);
    return UpdateMock200ApplicationJsonMock;
}(utils_1.SpeakeasyBase));
exports.UpdateMock200ApplicationJsonMock = UpdateMock200ApplicationJsonMock;
var UpdateMock200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateMock200ApplicationJson, _super);
    function UpdateMock200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mock" }),
        __metadata("design:type", UpdateMock200ApplicationJsonMock)
    ], UpdateMock200ApplicationJson.prototype, "mock", void 0);
    return UpdateMock200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateMock200ApplicationJson = UpdateMock200ApplicationJson;
var UpdateMockRequest = /** @class */ (function (_super) {
    __extends(UpdateMockRequest, _super);
    function UpdateMockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMockPathParams)
    ], UpdateMockRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMockRequestBody)
    ], UpdateMockRequest.prototype, "request", void 0);
    return UpdateMockRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateMockRequest = UpdateMockRequest;
var UpdateMockResponse = /** @class */ (function (_super) {
    __extends(UpdateMockResponse, _super);
    function UpdateMockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateMockResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateMockResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMock200ApplicationJson)
    ], UpdateMockResponse.prototype, "updateMock200ApplicationJSONObject", void 0);
    return UpdateMockResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateMockResponse = UpdateMockResponse;
