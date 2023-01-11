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
exports.ListAllPadsUsingGetResponse = exports.ListAllPadsUsingGet500ApplicationJson = exports.ListAllPadsUsingGet401ApplicationJson = exports.ListAllPadsUsingGet400ApplicationJson = exports.ListAllPadsUsingGet200ApplicationJson = exports.ListAllPadsUsingGet200ApplicationJsonData = void 0;
var utils_1 = require("../../../internal/utils");
var ListAllPadsUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingGet200ApplicationJsonData, _super);
    function ListAllPadsUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=padIDs" }),
        __metadata("design:type", Array)
    ], ListAllPadsUsingGet200ApplicationJsonData.prototype, "padIDs", void 0);
    return ListAllPadsUsingGet200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingGet200ApplicationJsonData = ListAllPadsUsingGet200ApplicationJsonData;
var ListAllPadsUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingGet200ApplicationJson, _super);
    function ListAllPadsUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllPadsUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ListAllPadsUsingGet200ApplicationJsonData)
    ], ListAllPadsUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllPadsUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListAllPadsUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingGet200ApplicationJson = ListAllPadsUsingGet200ApplicationJson;
var ListAllPadsUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingGet400ApplicationJson, _super);
    function ListAllPadsUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllPadsUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAllPadsUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllPadsUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListAllPadsUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingGet400ApplicationJson = ListAllPadsUsingGet400ApplicationJson;
var ListAllPadsUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingGet401ApplicationJson, _super);
    function ListAllPadsUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllPadsUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAllPadsUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllPadsUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListAllPadsUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingGet401ApplicationJson = ListAllPadsUsingGet401ApplicationJson;
var ListAllPadsUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingGet500ApplicationJson, _super);
    function ListAllPadsUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllPadsUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAllPadsUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllPadsUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListAllPadsUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingGet500ApplicationJson = ListAllPadsUsingGet500ApplicationJson;
var ListAllPadsUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingGetResponse, _super);
    function ListAllPadsUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllPadsUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllPadsUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllPadsUsingGet200ApplicationJson)
    ], ListAllPadsUsingGetResponse.prototype, "listAllPadsUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllPadsUsingGet400ApplicationJson)
    ], ListAllPadsUsingGetResponse.prototype, "listAllPadsUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllPadsUsingGet401ApplicationJson)
    ], ListAllPadsUsingGetResponse.prototype, "listAllPadsUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllPadsUsingGet500ApplicationJson)
    ], ListAllPadsUsingGetResponse.prototype, "listAllPadsUsingGET500ApplicationJSONObject", void 0);
    return ListAllPadsUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingGetResponse = ListAllPadsUsingGetResponse;
