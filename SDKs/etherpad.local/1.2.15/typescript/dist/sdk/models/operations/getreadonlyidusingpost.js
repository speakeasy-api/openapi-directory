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
exports.GetReadOnlyIdUsingPostResponse = exports.GetReadOnlyIdUsingPostRequest = exports.GetReadOnlyIdUsingPost500ApplicationJson = exports.GetReadOnlyIdUsingPost401ApplicationJson = exports.GetReadOnlyIdUsingPost400ApplicationJson = exports.GetReadOnlyIdUsingPost200ApplicationJson = exports.GetReadOnlyIdUsingPost200ApplicationJsonData = exports.GetReadOnlyIdUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetReadOnlyIdUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPostQueryParams, _super);
    function GetReadOnlyIdUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPostQueryParams.prototype, "padID", void 0);
    return GetReadOnlyIdUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingPostQueryParams = GetReadOnlyIdUsingPostQueryParams;
var GetReadOnlyIdUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost200ApplicationJsonData, _super);
    function GetReadOnlyIdUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=readOnlyID" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost200ApplicationJsonData.prototype, "readOnlyID", void 0);
    return GetReadOnlyIdUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingPost200ApplicationJsonData = GetReadOnlyIdUsingPost200ApplicationJsonData;
var GetReadOnlyIdUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost200ApplicationJson, _super);
    function GetReadOnlyIdUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetReadOnlyIdUsingPost200ApplicationJsonData)
    ], GetReadOnlyIdUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingPost200ApplicationJson = GetReadOnlyIdUsingPost200ApplicationJson;
var GetReadOnlyIdUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost400ApplicationJson, _super);
    function GetReadOnlyIdUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetReadOnlyIdUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingPost400ApplicationJson = GetReadOnlyIdUsingPost400ApplicationJson;
var GetReadOnlyIdUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost401ApplicationJson, _super);
    function GetReadOnlyIdUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetReadOnlyIdUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingPost401ApplicationJson = GetReadOnlyIdUsingPost401ApplicationJson;
var GetReadOnlyIdUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost500ApplicationJson, _super);
    function GetReadOnlyIdUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetReadOnlyIdUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingPost500ApplicationJson = GetReadOnlyIdUsingPost500ApplicationJson;
var GetReadOnlyIdUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPostRequest, _super);
    function GetReadOnlyIdUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingPostQueryParams)
    ], GetReadOnlyIdUsingPostRequest.prototype, "queryParams", void 0);
    return GetReadOnlyIdUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingPostRequest = GetReadOnlyIdUsingPostRequest;
var GetReadOnlyIdUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPostResponse, _super);
    function GetReadOnlyIdUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingPost200ApplicationJson)
    ], GetReadOnlyIdUsingPostResponse.prototype, "getReadOnlyIDUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingPost400ApplicationJson)
    ], GetReadOnlyIdUsingPostResponse.prototype, "getReadOnlyIDUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingPost401ApplicationJson)
    ], GetReadOnlyIdUsingPostResponse.prototype, "getReadOnlyIDUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReadOnlyIdUsingPost500ApplicationJson)
    ], GetReadOnlyIdUsingPostResponse.prototype, "getReadOnlyIDUsingPOST500ApplicationJSONObject", void 0);
    return GetReadOnlyIdUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.GetReadOnlyIdUsingPostResponse = GetReadOnlyIdUsingPostResponse;
