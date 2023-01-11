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
exports.GetStatsUsingPostResponse = exports.GetStatsUsingPost500ApplicationJson = exports.GetStatsUsingPost401ApplicationJson = exports.GetStatsUsingPost400ApplicationJson = exports.GetStatsUsingPost200ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var GetStatsUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingPost200ApplicationJson, _super);
    function GetStatsUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStatsUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingPost200ApplicationJson = GetStatsUsingPost200ApplicationJson;
var GetStatsUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingPost400ApplicationJson, _super);
    function GetStatsUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStatsUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingPost400ApplicationJson = GetStatsUsingPost400ApplicationJson;
var GetStatsUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingPost401ApplicationJson, _super);
    function GetStatsUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStatsUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingPost401ApplicationJson = GetStatsUsingPost401ApplicationJson;
var GetStatsUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingPost500ApplicationJson, _super);
    function GetStatsUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetStatsUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingPost500ApplicationJson = GetStatsUsingPost500ApplicationJson;
var GetStatsUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetStatsUsingPostResponse, _super);
    function GetStatsUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetStatsUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetStatsUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatsUsingPost200ApplicationJson)
    ], GetStatsUsingPostResponse.prototype, "getStatsUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatsUsingPost400ApplicationJson)
    ], GetStatsUsingPostResponse.prototype, "getStatsUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatsUsingPost401ApplicationJson)
    ], GetStatsUsingPostResponse.prototype, "getStatsUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatsUsingPost500ApplicationJson)
    ], GetStatsUsingPostResponse.prototype, "getStatsUsingPOST500ApplicationJSONObject", void 0);
    return GetStatsUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.GetStatsUsingPostResponse = GetStatsUsingPostResponse;
