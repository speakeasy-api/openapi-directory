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
exports.GetPadIdUsingPostResponse = exports.GetPadIdUsingPostRequest = exports.GetPadIdUsingPost500ApplicationJson = exports.GetPadIdUsingPost401ApplicationJson = exports.GetPadIdUsingPost400ApplicationJson = exports.GetPadIdUsingPost200ApplicationJson = exports.GetPadIdUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPadIdUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPostQueryParams, _super);
    function GetPadIdUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=roID" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPostQueryParams.prototype, "roID", void 0);
    return GetPadIdUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPadIdUsingPostQueryParams = GetPadIdUsingPostQueryParams;
var GetPadIdUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPost200ApplicationJson, _super);
    function GetPadIdUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetPadIdUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPadIdUsingPost200ApplicationJson = GetPadIdUsingPost200ApplicationJson;
var GetPadIdUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPost400ApplicationJson, _super);
    function GetPadIdUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetPadIdUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPadIdUsingPost400ApplicationJson = GetPadIdUsingPost400ApplicationJson;
var GetPadIdUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPost401ApplicationJson, _super);
    function GetPadIdUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetPadIdUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPadIdUsingPost401ApplicationJson = GetPadIdUsingPost401ApplicationJson;
var GetPadIdUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPost500ApplicationJson, _super);
    function GetPadIdUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetPadIdUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPadIdUsingPost500ApplicationJson = GetPadIdUsingPost500ApplicationJson;
var GetPadIdUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPostRequest, _super);
    function GetPadIdUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPadIdUsingPostQueryParams)
    ], GetPadIdUsingPostRequest.prototype, "queryParams", void 0);
    return GetPadIdUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.GetPadIdUsingPostRequest = GetPadIdUsingPostRequest;
var GetPadIdUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPostResponse, _super);
    function GetPadIdUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPadIdUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPadIdUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPadIdUsingPost200ApplicationJson)
    ], GetPadIdUsingPostResponse.prototype, "getPadIDUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPadIdUsingPost400ApplicationJson)
    ], GetPadIdUsingPostResponse.prototype, "getPadIDUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPadIdUsingPost401ApplicationJson)
    ], GetPadIdUsingPostResponse.prototype, "getPadIDUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPadIdUsingPost500ApplicationJson)
    ], GetPadIdUsingPostResponse.prototype, "getPadIDUsingPOST500ApplicationJSONObject", void 0);
    return GetPadIdUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.GetPadIdUsingPostResponse = GetPadIdUsingPostResponse;
