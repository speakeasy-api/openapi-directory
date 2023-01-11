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
exports.GetRevisionChangesetUsingGetResponse = exports.GetRevisionChangesetUsingGetRequest = exports.GetRevisionChangesetUsingGet500ApplicationJson = exports.GetRevisionChangesetUsingGet401ApplicationJson = exports.GetRevisionChangesetUsingGet400ApplicationJson = exports.GetRevisionChangesetUsingGet200ApplicationJson = exports.GetRevisionChangesetUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetRevisionChangesetUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingGetQueryParams, _super);
    function GetRevisionChangesetUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingGetQueryParams.prototype, "padID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingGetQueryParams.prototype, "rev", void 0);
    return GetRevisionChangesetUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRevisionChangesetUsingGetQueryParams = GetRevisionChangesetUsingGetQueryParams;
var GetRevisionChangesetUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingGet200ApplicationJson, _super);
    function GetRevisionChangesetUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetRevisionChangesetUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetRevisionChangesetUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRevisionChangesetUsingGet200ApplicationJson = GetRevisionChangesetUsingGet200ApplicationJson;
var GetRevisionChangesetUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingGet400ApplicationJson, _super);
    function GetRevisionChangesetUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetRevisionChangesetUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetRevisionChangesetUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRevisionChangesetUsingGet400ApplicationJson = GetRevisionChangesetUsingGet400ApplicationJson;
var GetRevisionChangesetUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingGet401ApplicationJson, _super);
    function GetRevisionChangesetUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetRevisionChangesetUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetRevisionChangesetUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRevisionChangesetUsingGet401ApplicationJson = GetRevisionChangesetUsingGet401ApplicationJson;
var GetRevisionChangesetUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingGet500ApplicationJson, _super);
    function GetRevisionChangesetUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetRevisionChangesetUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetRevisionChangesetUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRevisionChangesetUsingGet500ApplicationJson = GetRevisionChangesetUsingGet500ApplicationJson;
var GetRevisionChangesetUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingGetRequest, _super);
    function GetRevisionChangesetUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevisionChangesetUsingGetQueryParams)
    ], GetRevisionChangesetUsingGetRequest.prototype, "queryParams", void 0);
    return GetRevisionChangesetUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetRevisionChangesetUsingGetRequest = GetRevisionChangesetUsingGetRequest;
var GetRevisionChangesetUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingGetResponse, _super);
    function GetRevisionChangesetUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevisionChangesetUsingGet200ApplicationJson)
    ], GetRevisionChangesetUsingGetResponse.prototype, "getRevisionChangesetUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevisionChangesetUsingGet400ApplicationJson)
    ], GetRevisionChangesetUsingGetResponse.prototype, "getRevisionChangesetUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevisionChangesetUsingGet401ApplicationJson)
    ], GetRevisionChangesetUsingGetResponse.prototype, "getRevisionChangesetUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevisionChangesetUsingGet500ApplicationJson)
    ], GetRevisionChangesetUsingGetResponse.prototype, "getRevisionChangesetUsingGET500ApplicationJSONObject", void 0);
    return GetRevisionChangesetUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetRevisionChangesetUsingGetResponse = GetRevisionChangesetUsingGetResponse;
