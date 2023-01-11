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
exports.CopyPadWithoutHistoryUsingGetResponse = exports.CopyPadWithoutHistoryUsingGetRequest = exports.CopyPadWithoutHistoryUsingGet500ApplicationJson = exports.CopyPadWithoutHistoryUsingGet401ApplicationJson = exports.CopyPadWithoutHistoryUsingGet400ApplicationJson = exports.CopyPadWithoutHistoryUsingGet200ApplicationJson = exports.CopyPadWithoutHistoryUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CopyPadWithoutHistoryUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGetQueryParams, _super);
    function CopyPadWithoutHistoryUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destinationID" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGetQueryParams.prototype, "destinationID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGetQueryParams.prototype, "force", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceID" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGetQueryParams.prototype, "sourceID", void 0);
    return CopyPadWithoutHistoryUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingGetQueryParams = CopyPadWithoutHistoryUsingGetQueryParams;
var CopyPadWithoutHistoryUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGet200ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CopyPadWithoutHistoryUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGet200ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingGet200ApplicationJson = CopyPadWithoutHistoryUsingGet200ApplicationJson;
var CopyPadWithoutHistoryUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGet400ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CopyPadWithoutHistoryUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGet400ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingGet400ApplicationJson = CopyPadWithoutHistoryUsingGet400ApplicationJson;
var CopyPadWithoutHistoryUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGet401ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CopyPadWithoutHistoryUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGet401ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingGet401ApplicationJson = CopyPadWithoutHistoryUsingGet401ApplicationJson;
var CopyPadWithoutHistoryUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGet500ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CopyPadWithoutHistoryUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGet500ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingGet500ApplicationJson = CopyPadWithoutHistoryUsingGet500ApplicationJson;
var CopyPadWithoutHistoryUsingGetRequest = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGetRequest, _super);
    function CopyPadWithoutHistoryUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGetQueryParams)
    ], CopyPadWithoutHistoryUsingGetRequest.prototype, "queryParams", void 0);
    return CopyPadWithoutHistoryUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingGetRequest = CopyPadWithoutHistoryUsingGetRequest;
var CopyPadWithoutHistoryUsingGetResponse = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGetResponse, _super);
    function CopyPadWithoutHistoryUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGet200ApplicationJson)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "copyPadWithoutHistoryUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGet400ApplicationJson)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "copyPadWithoutHistoryUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGet401ApplicationJson)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "copyPadWithoutHistoryUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGet500ApplicationJson)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "copyPadWithoutHistoryUsingGET500ApplicationJSONObject", void 0);
    return CopyPadWithoutHistoryUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingGetResponse = CopyPadWithoutHistoryUsingGetResponse;
