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
exports.GetChatHeadUsingPostResponse = exports.GetChatHeadUsingPostRequest = exports.GetChatHeadUsingPost500ApplicationJson = exports.GetChatHeadUsingPost401ApplicationJson = exports.GetChatHeadUsingPost400ApplicationJson = exports.GetChatHeadUsingPost200ApplicationJson = exports.GetChatHeadUsingPost200ApplicationJsonData = exports.GetChatHeadUsingPost200ApplicationJsonDataChatHead = exports.GetChatHeadUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetChatHeadUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPostQueryParams, _super);
    function GetChatHeadUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingPostQueryParams.prototype, "padID", void 0);
    return GetChatHeadUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPostQueryParams = GetChatHeadUsingPostQueryParams;
var GetChatHeadUsingPost200ApplicationJsonDataChatHead = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPost200ApplicationJsonDataChatHead, _super);
    function GetChatHeadUsingPost200ApplicationJsonDataChatHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingPost200ApplicationJsonDataChatHead.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingPost200ApplicationJsonDataChatHead.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingPost200ApplicationJsonDataChatHead.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingPost200ApplicationJsonDataChatHead.prototype, "userName", void 0);
    return GetChatHeadUsingPost200ApplicationJsonDataChatHead;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPost200ApplicationJsonDataChatHead = GetChatHeadUsingPost200ApplicationJsonDataChatHead;
var GetChatHeadUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPost200ApplicationJsonData, _super);
    function GetChatHeadUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chatHead" }),
        __metadata("design:type", GetChatHeadUsingPost200ApplicationJsonDataChatHead)
    ], GetChatHeadUsingPost200ApplicationJsonData.prototype, "chatHead", void 0);
    return GetChatHeadUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPost200ApplicationJsonData = GetChatHeadUsingPost200ApplicationJsonData;
var GetChatHeadUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPost200ApplicationJson, _super);
    function GetChatHeadUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetChatHeadUsingPost200ApplicationJsonData)
    ], GetChatHeadUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetChatHeadUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPost200ApplicationJson = GetChatHeadUsingPost200ApplicationJson;
var GetChatHeadUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPost400ApplicationJson, _super);
    function GetChatHeadUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetChatHeadUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetChatHeadUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPost400ApplicationJson = GetChatHeadUsingPost400ApplicationJson;
var GetChatHeadUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPost401ApplicationJson, _super);
    function GetChatHeadUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetChatHeadUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetChatHeadUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPost401ApplicationJson = GetChatHeadUsingPost401ApplicationJson;
var GetChatHeadUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPost500ApplicationJson, _super);
    function GetChatHeadUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetChatHeadUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetChatHeadUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPost500ApplicationJson = GetChatHeadUsingPost500ApplicationJson;
var GetChatHeadUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPostRequest, _super);
    function GetChatHeadUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHeadUsingPostQueryParams)
    ], GetChatHeadUsingPostRequest.prototype, "queryParams", void 0);
    return GetChatHeadUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPostRequest = GetChatHeadUsingPostRequest;
var GetChatHeadUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingPostResponse, _super);
    function GetChatHeadUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetChatHeadUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetChatHeadUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHeadUsingPost200ApplicationJson)
    ], GetChatHeadUsingPostResponse.prototype, "getChatHeadUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHeadUsingPost400ApplicationJson)
    ], GetChatHeadUsingPostResponse.prototype, "getChatHeadUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHeadUsingPost401ApplicationJson)
    ], GetChatHeadUsingPostResponse.prototype, "getChatHeadUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHeadUsingPost500ApplicationJson)
    ], GetChatHeadUsingPostResponse.prototype, "getChatHeadUsingPOST500ApplicationJSONObject", void 0);
    return GetChatHeadUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.GetChatHeadUsingPostResponse = GetChatHeadUsingPostResponse;
