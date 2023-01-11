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
exports.PadUsersUsingGetResponse = exports.PadUsersUsingGetRequest = exports.PadUsersUsingGet500ApplicationJson = exports.PadUsersUsingGet401ApplicationJson = exports.PadUsersUsingGet400ApplicationJson = exports.PadUsersUsingGet200ApplicationJson = exports.PadUsersUsingGet200ApplicationJsonData = exports.PadUsersUsingGet200ApplicationJsonDataPadUsers = exports.PadUsersUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var PadUsersUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(PadUsersUsingGetQueryParams, _super);
    function PadUsersUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], PadUsersUsingGetQueryParams.prototype, "padID", void 0);
    return PadUsersUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGetQueryParams = PadUsersUsingGetQueryParams;
var PadUsersUsingGet200ApplicationJsonDataPadUsers = /** @class */ (function (_super) {
    __extends(PadUsersUsingGet200ApplicationJsonDataPadUsers, _super);
    function PadUsersUsingGet200ApplicationJsonDataPadUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=colorId" }),
        __metadata("design:type", String)
    ], PadUsersUsingGet200ApplicationJsonDataPadUsers.prototype, "colorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PadUsersUsingGet200ApplicationJsonDataPadUsers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PadUsersUsingGet200ApplicationJsonDataPadUsers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Number)
    ], PadUsersUsingGet200ApplicationJsonDataPadUsers.prototype, "timestamp", void 0);
    return PadUsersUsingGet200ApplicationJsonDataPadUsers;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGet200ApplicationJsonDataPadUsers = PadUsersUsingGet200ApplicationJsonDataPadUsers;
var PadUsersUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(PadUsersUsingGet200ApplicationJsonData, _super);
    function PadUsersUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=padUsers", elemType: PadUsersUsingGet200ApplicationJsonDataPadUsers }),
        __metadata("design:type", Array)
    ], PadUsersUsingGet200ApplicationJsonData.prototype, "padUsers", void 0);
    return PadUsersUsingGet200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGet200ApplicationJsonData = PadUsersUsingGet200ApplicationJsonData;
var PadUsersUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersUsingGet200ApplicationJson, _super);
    function PadUsersUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", PadUsersUsingGet200ApplicationJsonData)
    ], PadUsersUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersUsingGet200ApplicationJson.prototype, "message", void 0);
    return PadUsersUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGet200ApplicationJson = PadUsersUsingGet200ApplicationJson;
var PadUsersUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersUsingGet400ApplicationJson, _super);
    function PadUsersUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], PadUsersUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersUsingGet400ApplicationJson.prototype, "message", void 0);
    return PadUsersUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGet400ApplicationJson = PadUsersUsingGet400ApplicationJson;
var PadUsersUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersUsingGet401ApplicationJson, _super);
    function PadUsersUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], PadUsersUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersUsingGet401ApplicationJson.prototype, "message", void 0);
    return PadUsersUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGet401ApplicationJson = PadUsersUsingGet401ApplicationJson;
var PadUsersUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersUsingGet500ApplicationJson, _super);
    function PadUsersUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], PadUsersUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersUsingGet500ApplicationJson.prototype, "message", void 0);
    return PadUsersUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGet500ApplicationJson = PadUsersUsingGet500ApplicationJson;
var PadUsersUsingGetRequest = /** @class */ (function (_super) {
    __extends(PadUsersUsingGetRequest, _super);
    function PadUsersUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingGetQueryParams)
    ], PadUsersUsingGetRequest.prototype, "queryParams", void 0);
    return PadUsersUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGetRequest = PadUsersUsingGetRequest;
var PadUsersUsingGetResponse = /** @class */ (function (_super) {
    __extends(PadUsersUsingGetResponse, _super);
    function PadUsersUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PadUsersUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PadUsersUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingGet200ApplicationJson)
    ], PadUsersUsingGetResponse.prototype, "padUsersUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingGet400ApplicationJson)
    ], PadUsersUsingGetResponse.prototype, "padUsersUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingGet401ApplicationJson)
    ], PadUsersUsingGetResponse.prototype, "padUsersUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingGet500ApplicationJson)
    ], PadUsersUsingGetResponse.prototype, "padUsersUsingGET500ApplicationJSONObject", void 0);
    return PadUsersUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingGetResponse = PadUsersUsingGetResponse;
