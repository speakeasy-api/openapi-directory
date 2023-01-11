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
exports.DeleteSessionUsingGetResponse = exports.DeleteSessionUsingGetRequest = exports.DeleteSessionUsingGet500ApplicationJson = exports.DeleteSessionUsingGet401ApplicationJson = exports.DeleteSessionUsingGet400ApplicationJson = exports.DeleteSessionUsingGet200ApplicationJson = exports.DeleteSessionUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteSessionUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGetQueryParams, _super);
    function DeleteSessionUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sessionID" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGetQueryParams.prototype, "sessionID", void 0);
    return DeleteSessionUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteSessionUsingGetQueryParams = DeleteSessionUsingGetQueryParams;
var DeleteSessionUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGet200ApplicationJson, _super);
    function DeleteSessionUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], DeleteSessionUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGet200ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteSessionUsingGet200ApplicationJson = DeleteSessionUsingGet200ApplicationJson;
var DeleteSessionUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGet400ApplicationJson, _super);
    function DeleteSessionUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], DeleteSessionUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGet400ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteSessionUsingGet400ApplicationJson = DeleteSessionUsingGet400ApplicationJson;
var DeleteSessionUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGet401ApplicationJson, _super);
    function DeleteSessionUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], DeleteSessionUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGet401ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteSessionUsingGet401ApplicationJson = DeleteSessionUsingGet401ApplicationJson;
var DeleteSessionUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGet500ApplicationJson, _super);
    function DeleteSessionUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], DeleteSessionUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGet500ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteSessionUsingGet500ApplicationJson = DeleteSessionUsingGet500ApplicationJson;
var DeleteSessionUsingGetRequest = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGetRequest, _super);
    function DeleteSessionUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSessionUsingGetQueryParams)
    ], DeleteSessionUsingGetRequest.prototype, "queryParams", void 0);
    return DeleteSessionUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteSessionUsingGetRequest = DeleteSessionUsingGetRequest;
var DeleteSessionUsingGetResponse = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGetResponse, _super);
    function DeleteSessionUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteSessionUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSessionUsingGet200ApplicationJson)
    ], DeleteSessionUsingGetResponse.prototype, "deleteSessionUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSessionUsingGet400ApplicationJson)
    ], DeleteSessionUsingGetResponse.prototype, "deleteSessionUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSessionUsingGet401ApplicationJson)
    ], DeleteSessionUsingGetResponse.prototype, "deleteSessionUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSessionUsingGet500ApplicationJson)
    ], DeleteSessionUsingGetResponse.prototype, "deleteSessionUsingGET500ApplicationJSONObject", void 0);
    return DeleteSessionUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteSessionUsingGetResponse = DeleteSessionUsingGetResponse;
