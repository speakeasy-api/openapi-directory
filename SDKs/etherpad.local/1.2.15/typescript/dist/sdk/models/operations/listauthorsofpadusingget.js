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
exports.ListAuthorsOfPadUsingGetResponse = exports.ListAuthorsOfPadUsingGetRequest = exports.ListAuthorsOfPadUsingGet500ApplicationJson = exports.ListAuthorsOfPadUsingGet401ApplicationJson = exports.ListAuthorsOfPadUsingGet400ApplicationJson = exports.ListAuthorsOfPadUsingGet200ApplicationJson = exports.ListAuthorsOfPadUsingGet200ApplicationJsonData = exports.ListAuthorsOfPadUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListAuthorsOfPadUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingGetQueryParams, _super);
    function ListAuthorsOfPadUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingGetQueryParams.prototype, "padID", void 0);
    return ListAuthorsOfPadUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingGetQueryParams = ListAuthorsOfPadUsingGetQueryParams;
var ListAuthorsOfPadUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingGet200ApplicationJsonData, _super);
    function ListAuthorsOfPadUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorIDs" }),
        __metadata("design:type", Array)
    ], ListAuthorsOfPadUsingGet200ApplicationJsonData.prototype, "authorIDs", void 0);
    return ListAuthorsOfPadUsingGet200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingGet200ApplicationJsonData = ListAuthorsOfPadUsingGet200ApplicationJsonData;
var ListAuthorsOfPadUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingGet200ApplicationJson, _super);
    function ListAuthorsOfPadUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ListAuthorsOfPadUsingGet200ApplicationJsonData)
    ], ListAuthorsOfPadUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListAuthorsOfPadUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingGet200ApplicationJson = ListAuthorsOfPadUsingGet200ApplicationJson;
var ListAuthorsOfPadUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingGet400ApplicationJson, _super);
    function ListAuthorsOfPadUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAuthorsOfPadUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListAuthorsOfPadUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingGet400ApplicationJson = ListAuthorsOfPadUsingGet400ApplicationJson;
var ListAuthorsOfPadUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingGet401ApplicationJson, _super);
    function ListAuthorsOfPadUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAuthorsOfPadUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListAuthorsOfPadUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingGet401ApplicationJson = ListAuthorsOfPadUsingGet401ApplicationJson;
var ListAuthorsOfPadUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingGet500ApplicationJson, _super);
    function ListAuthorsOfPadUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAuthorsOfPadUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListAuthorsOfPadUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingGet500ApplicationJson = ListAuthorsOfPadUsingGet500ApplicationJson;
var ListAuthorsOfPadUsingGetRequest = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingGetRequest, _super);
    function ListAuthorsOfPadUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingGetQueryParams)
    ], ListAuthorsOfPadUsingGetRequest.prototype, "queryParams", void 0);
    return ListAuthorsOfPadUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingGetRequest = ListAuthorsOfPadUsingGetRequest;
var ListAuthorsOfPadUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingGetResponse, _super);
    function ListAuthorsOfPadUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingGet200ApplicationJson)
    ], ListAuthorsOfPadUsingGetResponse.prototype, "listAuthorsOfPadUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingGet400ApplicationJson)
    ], ListAuthorsOfPadUsingGetResponse.prototype, "listAuthorsOfPadUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingGet401ApplicationJson)
    ], ListAuthorsOfPadUsingGetResponse.prototype, "listAuthorsOfPadUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingGet500ApplicationJson)
    ], ListAuthorsOfPadUsingGetResponse.prototype, "listAuthorsOfPadUsingGET500ApplicationJSONObject", void 0);
    return ListAuthorsOfPadUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingGetResponse = ListAuthorsOfPadUsingGetResponse;
