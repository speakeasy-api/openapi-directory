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
exports.CreateSessionUsingGetResponse = exports.CreateSessionUsingGetRequest = exports.CreateSessionUsingGet500ApplicationJson = exports.CreateSessionUsingGet401ApplicationJson = exports.CreateSessionUsingGet400ApplicationJson = exports.CreateSessionUsingGet200ApplicationJson = exports.CreateSessionUsingGet200ApplicationJsonData = exports.CreateSessionUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateSessionUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGetQueryParams, _super);
    function CreateSessionUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGetQueryParams.prototype, "authorID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGetQueryParams.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=validUntil" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGetQueryParams.prototype, "validUntil", void 0);
    return CreateSessionUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingGetQueryParams = CreateSessionUsingGetQueryParams;
var CreateSessionUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet200ApplicationJsonData, _super);
    function CreateSessionUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessionID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet200ApplicationJsonData.prototype, "sessionID", void 0);
    return CreateSessionUsingGet200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingGet200ApplicationJsonData = CreateSessionUsingGet200ApplicationJsonData;
var CreateSessionUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet200ApplicationJson, _super);
    function CreateSessionUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", CreateSessionUsingGet200ApplicationJsonData)
    ], CreateSessionUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingGet200ApplicationJson = CreateSessionUsingGet200ApplicationJson;
var CreateSessionUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet400ApplicationJson, _super);
    function CreateSessionUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateSessionUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingGet400ApplicationJson = CreateSessionUsingGet400ApplicationJson;
var CreateSessionUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet401ApplicationJson, _super);
    function CreateSessionUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateSessionUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingGet401ApplicationJson = CreateSessionUsingGet401ApplicationJson;
var CreateSessionUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet500ApplicationJson, _super);
    function CreateSessionUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateSessionUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingGet500ApplicationJson = CreateSessionUsingGet500ApplicationJson;
var CreateSessionUsingGetRequest = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGetRequest, _super);
    function CreateSessionUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingGetQueryParams)
    ], CreateSessionUsingGetRequest.prototype, "queryParams", void 0);
    return CreateSessionUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingGetRequest = CreateSessionUsingGetRequest;
var CreateSessionUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGetResponse, _super);
    function CreateSessionUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSessionUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSessionUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingGet200ApplicationJson)
    ], CreateSessionUsingGetResponse.prototype, "createSessionUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingGet400ApplicationJson)
    ], CreateSessionUsingGetResponse.prototype, "createSessionUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingGet401ApplicationJson)
    ], CreateSessionUsingGetResponse.prototype, "createSessionUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingGet500ApplicationJson)
    ], CreateSessionUsingGetResponse.prototype, "createSessionUsingGET500ApplicationJSONObject", void 0);
    return CreateSessionUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingGetResponse = CreateSessionUsingGetResponse;
