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
exports.GetAttributePoolUsingPostResponse = exports.GetAttributePoolUsingPostRequest = exports.GetAttributePoolUsingPost500ApplicationJson = exports.GetAttributePoolUsingPost401ApplicationJson = exports.GetAttributePoolUsingPost400ApplicationJson = exports.GetAttributePoolUsingPost200ApplicationJson = exports.GetAttributePoolUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAttributePoolUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPostQueryParams, _super);
    function GetAttributePoolUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPostQueryParams.prototype, "padID", void 0);
    return GetAttributePoolUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingPostQueryParams = GetAttributePoolUsingPostQueryParams;
var GetAttributePoolUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPost200ApplicationJson, _super);
    function GetAttributePoolUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetAttributePoolUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingPost200ApplicationJson = GetAttributePoolUsingPost200ApplicationJson;
var GetAttributePoolUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPost400ApplicationJson, _super);
    function GetAttributePoolUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetAttributePoolUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingPost400ApplicationJson = GetAttributePoolUsingPost400ApplicationJson;
var GetAttributePoolUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPost401ApplicationJson, _super);
    function GetAttributePoolUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetAttributePoolUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingPost401ApplicationJson = GetAttributePoolUsingPost401ApplicationJson;
var GetAttributePoolUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPost500ApplicationJson, _super);
    function GetAttributePoolUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetAttributePoolUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingPost500ApplicationJson = GetAttributePoolUsingPost500ApplicationJson;
var GetAttributePoolUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPostRequest, _super);
    function GetAttributePoolUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingPostQueryParams)
    ], GetAttributePoolUsingPostRequest.prototype, "queryParams", void 0);
    return GetAttributePoolUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingPostRequest = GetAttributePoolUsingPostRequest;
var GetAttributePoolUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPostResponse, _super);
    function GetAttributePoolUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingPost200ApplicationJson)
    ], GetAttributePoolUsingPostResponse.prototype, "getAttributePoolUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingPost400ApplicationJson)
    ], GetAttributePoolUsingPostResponse.prototype, "getAttributePoolUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingPost401ApplicationJson)
    ], GetAttributePoolUsingPostResponse.prototype, "getAttributePoolUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttributePoolUsingPost500ApplicationJson)
    ], GetAttributePoolUsingPostResponse.prototype, "getAttributePoolUsingPOST500ApplicationJSONObject", void 0);
    return GetAttributePoolUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.GetAttributePoolUsingPostResponse = GetAttributePoolUsingPostResponse;
