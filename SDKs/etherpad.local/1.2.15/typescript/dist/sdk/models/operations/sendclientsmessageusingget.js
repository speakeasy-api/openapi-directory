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
exports.SendClientsMessageUsingGetResponse = exports.SendClientsMessageUsingGetRequest = exports.SendClientsMessageUsingGet500ApplicationJson = exports.SendClientsMessageUsingGet401ApplicationJson = exports.SendClientsMessageUsingGet400ApplicationJson = exports.SendClientsMessageUsingGet200ApplicationJson = exports.SendClientsMessageUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var SendClientsMessageUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGetQueryParams, _super);
    function SendClientsMessageUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=msg" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGetQueryParams.prototype, "msg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGetQueryParams.prototype, "padID", void 0);
    return SendClientsMessageUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.SendClientsMessageUsingGetQueryParams = SendClientsMessageUsingGetQueryParams;
var SendClientsMessageUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGet200ApplicationJson, _super);
    function SendClientsMessageUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SendClientsMessageUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGet200ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendClientsMessageUsingGet200ApplicationJson = SendClientsMessageUsingGet200ApplicationJson;
var SendClientsMessageUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGet400ApplicationJson, _super);
    function SendClientsMessageUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SendClientsMessageUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGet400ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendClientsMessageUsingGet400ApplicationJson = SendClientsMessageUsingGet400ApplicationJson;
var SendClientsMessageUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGet401ApplicationJson, _super);
    function SendClientsMessageUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SendClientsMessageUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGet401ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendClientsMessageUsingGet401ApplicationJson = SendClientsMessageUsingGet401ApplicationJson;
var SendClientsMessageUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGet500ApplicationJson, _super);
    function SendClientsMessageUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SendClientsMessageUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGet500ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendClientsMessageUsingGet500ApplicationJson = SendClientsMessageUsingGet500ApplicationJson;
var SendClientsMessageUsingGetRequest = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGetRequest, _super);
    function SendClientsMessageUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendClientsMessageUsingGetQueryParams)
    ], SendClientsMessageUsingGetRequest.prototype, "queryParams", void 0);
    return SendClientsMessageUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.SendClientsMessageUsingGetRequest = SendClientsMessageUsingGetRequest;
var SendClientsMessageUsingGetResponse = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGetResponse, _super);
    function SendClientsMessageUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendClientsMessageUsingGet200ApplicationJson)
    ], SendClientsMessageUsingGetResponse.prototype, "sendClientsMessageUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendClientsMessageUsingGet400ApplicationJson)
    ], SendClientsMessageUsingGetResponse.prototype, "sendClientsMessageUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendClientsMessageUsingGet401ApplicationJson)
    ], SendClientsMessageUsingGetResponse.prototype, "sendClientsMessageUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendClientsMessageUsingGet500ApplicationJson)
    ], SendClientsMessageUsingGetResponse.prototype, "sendClientsMessageUsingGET500ApplicationJSONObject", void 0);
    return SendClientsMessageUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.SendClientsMessageUsingGetResponse = SendClientsMessageUsingGetResponse;
