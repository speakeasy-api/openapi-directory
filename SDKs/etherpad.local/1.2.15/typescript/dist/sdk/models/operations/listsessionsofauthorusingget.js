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
exports.ListSessionsOfAuthorUsingGetResponse = exports.ListSessionsOfAuthorUsingGetRequest = exports.ListSessionsOfAuthorUsingGet500ApplicationJson = exports.ListSessionsOfAuthorUsingGet401ApplicationJson = exports.ListSessionsOfAuthorUsingGet400ApplicationJson = exports.ListSessionsOfAuthorUsingGet200ApplicationJson = exports.ListSessionsOfAuthorUsingGet200ApplicationJsonData = exports.ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions = exports.ListSessionsOfAuthorUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListSessionsOfAuthorUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGetQueryParams, _super);
    function ListSessionsOfAuthorUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGetQueryParams.prototype, "authorID", void 0);
    return ListSessionsOfAuthorUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGetQueryParams = ListSessionsOfAuthorUsingGetQueryParams;
var ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions, _super);
    function ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions.prototype, "authorID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions.prototype, "validUntil", void 0);
    return ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions = ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions;
var ListSessionsOfAuthorUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet200ApplicationJsonData, _super);
    function ListSessionsOfAuthorUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessions", elemType: ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions }),
        __metadata("design:type", Array)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonData.prototype, "sessions", void 0);
    return ListSessionsOfAuthorUsingGet200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGet200ApplicationJsonData = ListSessionsOfAuthorUsingGet200ApplicationJsonData;
var ListSessionsOfAuthorUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet200ApplicationJson, _super);
    function ListSessionsOfAuthorUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ListSessionsOfAuthorUsingGet200ApplicationJsonData)
    ], ListSessionsOfAuthorUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGet200ApplicationJson = ListSessionsOfAuthorUsingGet200ApplicationJson;
var ListSessionsOfAuthorUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet400ApplicationJson, _super);
    function ListSessionsOfAuthorUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSessionsOfAuthorUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGet400ApplicationJson = ListSessionsOfAuthorUsingGet400ApplicationJson;
var ListSessionsOfAuthorUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet401ApplicationJson, _super);
    function ListSessionsOfAuthorUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSessionsOfAuthorUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGet401ApplicationJson = ListSessionsOfAuthorUsingGet401ApplicationJson;
var ListSessionsOfAuthorUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet500ApplicationJson, _super);
    function ListSessionsOfAuthorUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSessionsOfAuthorUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGet500ApplicationJson = ListSessionsOfAuthorUsingGet500ApplicationJson;
var ListSessionsOfAuthorUsingGetRequest = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGetRequest, _super);
    function ListSessionsOfAuthorUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfAuthorUsingGetQueryParams)
    ], ListSessionsOfAuthorUsingGetRequest.prototype, "queryParams", void 0);
    return ListSessionsOfAuthorUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGetRequest = ListSessionsOfAuthorUsingGetRequest;
var ListSessionsOfAuthorUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGetResponse, _super);
    function ListSessionsOfAuthorUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfAuthorUsingGet200ApplicationJson)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "listSessionsOfAuthorUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfAuthorUsingGet400ApplicationJson)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "listSessionsOfAuthorUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfAuthorUsingGet401ApplicationJson)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "listSessionsOfAuthorUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfAuthorUsingGet500ApplicationJson)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "listSessionsOfAuthorUsingGET500ApplicationJSONObject", void 0);
    return ListSessionsOfAuthorUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfAuthorUsingGetResponse = ListSessionsOfAuthorUsingGetResponse;
