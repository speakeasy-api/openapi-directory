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
exports.GetAttributePoolUsingGetResponse = exports.GetAttributePoolUsingGetRequest = exports.GetAttributePoolUsingGet500ApplicationJson = exports.GetAttributePoolUsingGet401ApplicationJson = exports.GetAttributePoolUsingGet400ApplicationJson = exports.GetAttributePoolUsingGet200ApplicationJson = exports.GetAttributePoolUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAttributePoolUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingGetQueryParams, _super);
    function GetAttributePoolUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingGetQueryParams.prototype, "padID", void 0);
    return GetAttributePoolUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingGetQueryParams = GetAttributePoolUsingGetQueryParams;
var GetAttributePoolUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingGet200ApplicationJson, _super);
    function GetAttributePoolUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetAttributePoolUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingGet200ApplicationJson = GetAttributePoolUsingGet200ApplicationJson;
var GetAttributePoolUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingGet400ApplicationJson, _super);
    function GetAttributePoolUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetAttributePoolUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingGet400ApplicationJson = GetAttributePoolUsingGet400ApplicationJson;
var GetAttributePoolUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingGet401ApplicationJson, _super);
    function GetAttributePoolUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetAttributePoolUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingGet401ApplicationJson = GetAttributePoolUsingGet401ApplicationJson;
var GetAttributePoolUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingGet500ApplicationJson, _super);
    function GetAttributePoolUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetAttributePoolUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingGet500ApplicationJson = GetAttributePoolUsingGet500ApplicationJson;
var GetAttributePoolUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingGetRequest, _super);
    function GetAttributePoolUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingGetQueryParams)
    ], GetAttributePoolUsingGetRequest.prototype, "queryParams", void 0);
    return GetAttributePoolUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingGetRequest = GetAttributePoolUsingGetRequest;
var GetAttributePoolUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingGetResponse, _super);
    function GetAttributePoolUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAttributePoolUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingGet200ApplicationJson)
    ], GetAttributePoolUsingGetResponse.prototype, "getAttributePoolUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingGet400ApplicationJson)
    ], GetAttributePoolUsingGetResponse.prototype, "getAttributePoolUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingGet401ApplicationJson)
    ], GetAttributePoolUsingGetResponse.prototype, "getAttributePoolUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingGet500ApplicationJson)
    ], GetAttributePoolUsingGetResponse.prototype, "getAttributePoolUsingGET500ApplicationJSONObject", void 0);
    return GetAttributePoolUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingGetResponse = GetAttributePoolUsingGetResponse;
