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
exports.GetReadOnlyIdUsingGetResponse = exports.GetReadOnlyIdUsingGetRequest = exports.GetReadOnlyIdUsingGet500ApplicationJson = exports.GetReadOnlyIdUsingGet401ApplicationJson = exports.GetReadOnlyIdUsingGet400ApplicationJson = exports.GetReadOnlyIdUsingGet200ApplicationJson = exports.GetReadOnlyIdUsingGet200ApplicationJsonData = exports.GetReadOnlyIdUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetReadOnlyIdUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingGetQueryParams, _super);
    function GetReadOnlyIdUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingGetQueryParams.prototype, "padID", void 0);
    return GetReadOnlyIdUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingGetQueryParams = GetReadOnlyIdUsingGetQueryParams;
var GetReadOnlyIdUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingGet200ApplicationJsonData, _super);
    function GetReadOnlyIdUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=readOnlyID" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingGet200ApplicationJsonData.prototype, "readOnlyID", void 0);
    return GetReadOnlyIdUsingGet200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingGet200ApplicationJsonData = GetReadOnlyIdUsingGet200ApplicationJsonData;
var GetReadOnlyIdUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingGet200ApplicationJson, _super);
    function GetReadOnlyIdUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetReadOnlyIdUsingGet200ApplicationJsonData)
    ], GetReadOnlyIdUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingGet200ApplicationJson = GetReadOnlyIdUsingGet200ApplicationJson;
var GetReadOnlyIdUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingGet400ApplicationJson, _super);
    function GetReadOnlyIdUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetReadOnlyIdUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingGet400ApplicationJson = GetReadOnlyIdUsingGet400ApplicationJson;
var GetReadOnlyIdUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingGet401ApplicationJson, _super);
    function GetReadOnlyIdUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetReadOnlyIdUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingGet401ApplicationJson = GetReadOnlyIdUsingGet401ApplicationJson;
var GetReadOnlyIdUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingGet500ApplicationJson, _super);
    function GetReadOnlyIdUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetReadOnlyIdUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingGet500ApplicationJson = GetReadOnlyIdUsingGet500ApplicationJson;
var GetReadOnlyIdUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingGetRequest, _super);
    function GetReadOnlyIdUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingGetQueryParams)
    ], GetReadOnlyIdUsingGetRequest.prototype, "queryParams", void 0);
    return GetReadOnlyIdUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingGetRequest = GetReadOnlyIdUsingGetRequest;
var GetReadOnlyIdUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingGetResponse, _super);
    function GetReadOnlyIdUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingGet200ApplicationJson)
    ], GetReadOnlyIdUsingGetResponse.prototype, "getReadOnlyIDUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingGet400ApplicationJson)
    ], GetReadOnlyIdUsingGetResponse.prototype, "getReadOnlyIDUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingGet401ApplicationJson)
    ], GetReadOnlyIdUsingGetResponse.prototype, "getReadOnlyIDUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingGet500ApplicationJson)
    ], GetReadOnlyIdUsingGetResponse.prototype, "getReadOnlyIDUsingGET500ApplicationJSONObject", void 0);
    return GetReadOnlyIdUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingGetResponse = GetReadOnlyIdUsingGetResponse;
