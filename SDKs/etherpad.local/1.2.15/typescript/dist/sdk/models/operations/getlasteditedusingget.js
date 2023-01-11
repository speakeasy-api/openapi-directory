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
exports.GetLastEditedUsingGetResponse = exports.GetLastEditedUsingGetRequest = exports.GetLastEditedUsingGet500ApplicationJson = exports.GetLastEditedUsingGet401ApplicationJson = exports.GetLastEditedUsingGet400ApplicationJson = exports.GetLastEditedUsingGet200ApplicationJson = exports.GetLastEditedUsingGet200ApplicationJsonData = exports.GetLastEditedUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetLastEditedUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingGetQueryParams, _super);
    function GetLastEditedUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingGetQueryParams.prototype, "padID", void 0);
    return GetLastEditedUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetLastEditedUsingGetQueryParams = GetLastEditedUsingGetQueryParams;
var GetLastEditedUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingGet200ApplicationJsonData, _super);
    function GetLastEditedUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastEdited" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingGet200ApplicationJsonData.prototype, "lastEdited", void 0);
    return GetLastEditedUsingGet200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetLastEditedUsingGet200ApplicationJsonData = GetLastEditedUsingGet200ApplicationJsonData;
var GetLastEditedUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingGet200ApplicationJson, _super);
    function GetLastEditedUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetLastEditedUsingGet200ApplicationJsonData)
    ], GetLastEditedUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetLastEditedUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLastEditedUsingGet200ApplicationJson = GetLastEditedUsingGet200ApplicationJson;
var GetLastEditedUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingGet400ApplicationJson, _super);
    function GetLastEditedUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetLastEditedUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetLastEditedUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLastEditedUsingGet400ApplicationJson = GetLastEditedUsingGet400ApplicationJson;
var GetLastEditedUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingGet401ApplicationJson, _super);
    function GetLastEditedUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetLastEditedUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetLastEditedUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLastEditedUsingGet401ApplicationJson = GetLastEditedUsingGet401ApplicationJson;
var GetLastEditedUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingGet500ApplicationJson, _super);
    function GetLastEditedUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetLastEditedUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetLastEditedUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLastEditedUsingGet500ApplicationJson = GetLastEditedUsingGet500ApplicationJson;
var GetLastEditedUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingGetRequest, _super);
    function GetLastEditedUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLastEditedUsingGetQueryParams)
    ], GetLastEditedUsingGetRequest.prototype, "queryParams", void 0);
    return GetLastEditedUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetLastEditedUsingGetRequest = GetLastEditedUsingGetRequest;
var GetLastEditedUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingGetResponse, _super);
    function GetLastEditedUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLastEditedUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLastEditedUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLastEditedUsingGet200ApplicationJson)
    ], GetLastEditedUsingGetResponse.prototype, "getLastEditedUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLastEditedUsingGet400ApplicationJson)
    ], GetLastEditedUsingGetResponse.prototype, "getLastEditedUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLastEditedUsingGet401ApplicationJson)
    ], GetLastEditedUsingGetResponse.prototype, "getLastEditedUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLastEditedUsingGet500ApplicationJson)
    ], GetLastEditedUsingGetResponse.prototype, "getLastEditedUsingGET500ApplicationJSONObject", void 0);
    return GetLastEditedUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetLastEditedUsingGetResponse = GetLastEditedUsingGetResponse;
