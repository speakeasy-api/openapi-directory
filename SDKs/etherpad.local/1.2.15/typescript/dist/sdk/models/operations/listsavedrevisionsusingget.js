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
exports.ListSavedRevisionsUsingGetResponse = exports.ListSavedRevisionsUsingGetRequest = exports.ListSavedRevisionsUsingGet500ApplicationJson = exports.ListSavedRevisionsUsingGet401ApplicationJson = exports.ListSavedRevisionsUsingGet400ApplicationJson = exports.ListSavedRevisionsUsingGet200ApplicationJson = exports.ListSavedRevisionsUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListSavedRevisionsUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGetQueryParams, _super);
    function ListSavedRevisionsUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGetQueryParams.prototype, "padID", void 0);
    return ListSavedRevisionsUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingGetQueryParams = ListSavedRevisionsUsingGetQueryParams;
var ListSavedRevisionsUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGet200ApplicationJson, _super);
    function ListSavedRevisionsUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSavedRevisionsUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingGet200ApplicationJson = ListSavedRevisionsUsingGet200ApplicationJson;
var ListSavedRevisionsUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGet400ApplicationJson, _super);
    function ListSavedRevisionsUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSavedRevisionsUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingGet400ApplicationJson = ListSavedRevisionsUsingGet400ApplicationJson;
var ListSavedRevisionsUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGet401ApplicationJson, _super);
    function ListSavedRevisionsUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSavedRevisionsUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingGet401ApplicationJson = ListSavedRevisionsUsingGet401ApplicationJson;
var ListSavedRevisionsUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGet500ApplicationJson, _super);
    function ListSavedRevisionsUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSavedRevisionsUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingGet500ApplicationJson = ListSavedRevisionsUsingGet500ApplicationJson;
var ListSavedRevisionsUsingGetRequest = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGetRequest, _super);
    function ListSavedRevisionsUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingGetQueryParams)
    ], ListSavedRevisionsUsingGetRequest.prototype, "queryParams", void 0);
    return ListSavedRevisionsUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingGetRequest = ListSavedRevisionsUsingGetRequest;
var ListSavedRevisionsUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGetResponse, _super);
    function ListSavedRevisionsUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingGet200ApplicationJson)
    ], ListSavedRevisionsUsingGetResponse.prototype, "listSavedRevisionsUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingGet400ApplicationJson)
    ], ListSavedRevisionsUsingGetResponse.prototype, "listSavedRevisionsUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingGet401ApplicationJson)
    ], ListSavedRevisionsUsingGetResponse.prototype, "listSavedRevisionsUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingGet500ApplicationJson)
    ], ListSavedRevisionsUsingGetResponse.prototype, "listSavedRevisionsUsingGET500ApplicationJSONObject", void 0);
    return ListSavedRevisionsUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingGetResponse = ListSavedRevisionsUsingGetResponse;
