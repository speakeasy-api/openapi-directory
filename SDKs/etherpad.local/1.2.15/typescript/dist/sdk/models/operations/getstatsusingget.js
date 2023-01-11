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
exports.GetStatsUsingGetResponse = exports.GetStatsUsingGet500ApplicationJson = exports.GetStatsUsingGet401ApplicationJson = exports.GetStatsUsingGet400ApplicationJson = exports.GetStatsUsingGet200ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var GetStatsUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingGet200ApplicationJson, _super);
    function GetStatsUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStatsUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingGet200ApplicationJson = GetStatsUsingGet200ApplicationJson;
var GetStatsUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingGet400ApplicationJson, _super);
    function GetStatsUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStatsUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingGet400ApplicationJson = GetStatsUsingGet400ApplicationJson;
var GetStatsUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingGet401ApplicationJson, _super);
    function GetStatsUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStatsUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingGet401ApplicationJson = GetStatsUsingGet401ApplicationJson;
var GetStatsUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingGet500ApplicationJson, _super);
    function GetStatsUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStatsUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingGet500ApplicationJson = GetStatsUsingGet500ApplicationJson;
var GetStatsUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetStatsUsingGetResponse, _super);
    function GetStatsUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetStatsUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetStatsUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatsUsingGet200ApplicationJson)
    ], GetStatsUsingGetResponse.prototype, "getStatsUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatsUsingGet400ApplicationJson)
    ], GetStatsUsingGetResponse.prototype, "getStatsUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatsUsingGet401ApplicationJson)
    ], GetStatsUsingGetResponse.prototype, "getStatsUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatsUsingGet500ApplicationJson)
    ], GetStatsUsingGetResponse.prototype, "getStatsUsingGET500ApplicationJSONObject", void 0);
    return GetStatsUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingGetResponse = GetStatsUsingGetResponse;
