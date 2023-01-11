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
exports.GetSessionInfoUsingPostResponse = exports.GetSessionInfoUsingPostRequest = exports.GetSessionInfoUsingPost500ApplicationJson = exports.GetSessionInfoUsingPost401ApplicationJson = exports.GetSessionInfoUsingPost400ApplicationJson = exports.GetSessionInfoUsingPost200ApplicationJson = exports.GetSessionInfoUsingPost200ApplicationJsonData = exports.GetSessionInfoUsingPost200ApplicationJsonDataInfo = exports.GetSessionInfoUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSessionInfoUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPostQueryParams, _super);
    function GetSessionInfoUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sessionID" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPostQueryParams.prototype, "sessionID", void 0);
    return GetSessionInfoUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPostQueryParams = GetSessionInfoUsingPostQueryParams;
var GetSessionInfoUsingPost200ApplicationJsonDataInfo = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPost200ApplicationJsonDataInfo, _super);
    function GetSessionInfoUsingPost200ApplicationJsonDataInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPost200ApplicationJsonDataInfo.prototype, "authorID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPost200ApplicationJsonDataInfo.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPost200ApplicationJsonDataInfo.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingPost200ApplicationJsonDataInfo.prototype, "validUntil", void 0);
    return GetSessionInfoUsingPost200ApplicationJsonDataInfo;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPost200ApplicationJsonDataInfo = GetSessionInfoUsingPost200ApplicationJsonDataInfo;
var GetSessionInfoUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPost200ApplicationJsonData, _super);
    function GetSessionInfoUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=info" }),
        __metadata("design:type", GetSessionInfoUsingPost200ApplicationJsonDataInfo)
    ], GetSessionInfoUsingPost200ApplicationJsonData.prototype, "info", void 0);
    return GetSessionInfoUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPost200ApplicationJsonData = GetSessionInfoUsingPost200ApplicationJsonData;
var GetSessionInfoUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPost200ApplicationJson, _super);
    function GetSessionInfoUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetSessionInfoUsingPost200ApplicationJsonData)
    ], GetSessionInfoUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetSessionInfoUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPost200ApplicationJson = GetSessionInfoUsingPost200ApplicationJson;
var GetSessionInfoUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPost400ApplicationJson, _super);
    function GetSessionInfoUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetSessionInfoUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetSessionInfoUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPost400ApplicationJson = GetSessionInfoUsingPost400ApplicationJson;
var GetSessionInfoUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPost401ApplicationJson, _super);
    function GetSessionInfoUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetSessionInfoUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetSessionInfoUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPost401ApplicationJson = GetSessionInfoUsingPost401ApplicationJson;
var GetSessionInfoUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPost500ApplicationJson, _super);
    function GetSessionInfoUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetSessionInfoUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetSessionInfoUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPost500ApplicationJson = GetSessionInfoUsingPost500ApplicationJson;
var GetSessionInfoUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPostRequest, _super);
    function GetSessionInfoUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSessionInfoUsingPostQueryParams)
    ], GetSessionInfoUsingPostRequest.prototype, "queryParams", void 0);
    return GetSessionInfoUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPostRequest = GetSessionInfoUsingPostRequest;
var GetSessionInfoUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingPostResponse, _super);
    function GetSessionInfoUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSessionInfoUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSessionInfoUsingPost200ApplicationJson)
    ], GetSessionInfoUsingPostResponse.prototype, "getSessionInfoUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSessionInfoUsingPost400ApplicationJson)
    ], GetSessionInfoUsingPostResponse.prototype, "getSessionInfoUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSessionInfoUsingPost401ApplicationJson)
    ], GetSessionInfoUsingPostResponse.prototype, "getSessionInfoUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSessionInfoUsingPost500ApplicationJson)
    ], GetSessionInfoUsingPostResponse.prototype, "getSessionInfoUsingPOST500ApplicationJSONObject", void 0);
    return GetSessionInfoUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.GetSessionInfoUsingPostResponse = GetSessionInfoUsingPostResponse;
