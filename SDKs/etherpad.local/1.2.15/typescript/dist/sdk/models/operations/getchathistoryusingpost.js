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
exports.GetChatHistoryUsingPostResponse = exports.GetChatHistoryUsingPostRequest = exports.GetChatHistoryUsingPost500ApplicationJson = exports.GetChatHistoryUsingPost401ApplicationJson = exports.GetChatHistoryUsingPost400ApplicationJson = exports.GetChatHistoryUsingPost200ApplicationJson = exports.GetChatHistoryUsingPost200ApplicationJsonData = exports.GetChatHistoryUsingPost200ApplicationJsonDataMessages = exports.GetChatHistoryUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetChatHistoryUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPostQueryParams, _super);
    function GetChatHistoryUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPostQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPostQueryParams.prototype, "padID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPostQueryParams.prototype, "start", void 0);
    return GetChatHistoryUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPostQueryParams = GetChatHistoryUsingPostQueryParams;
var GetChatHistoryUsingPost200ApplicationJsonDataMessages = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPost200ApplicationJsonDataMessages, _super);
    function GetChatHistoryUsingPost200ApplicationJsonDataMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPost200ApplicationJsonDataMessages.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingPost200ApplicationJsonDataMessages.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPost200ApplicationJsonDataMessages.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPost200ApplicationJsonDataMessages.prototype, "userName", void 0);
    return GetChatHistoryUsingPost200ApplicationJsonDataMessages;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPost200ApplicationJsonDataMessages = GetChatHistoryUsingPost200ApplicationJsonDataMessages;
var GetChatHistoryUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPost200ApplicationJsonData, _super);
    function GetChatHistoryUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: GetChatHistoryUsingPost200ApplicationJsonDataMessages }),
        __metadata("design:type", Array)
    ], GetChatHistoryUsingPost200ApplicationJsonData.prototype, "messages", void 0);
    return GetChatHistoryUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPost200ApplicationJsonData = GetChatHistoryUsingPost200ApplicationJsonData;
var GetChatHistoryUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPost200ApplicationJson, _super);
    function GetChatHistoryUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetChatHistoryUsingPost200ApplicationJsonData)
    ], GetChatHistoryUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetChatHistoryUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPost200ApplicationJson = GetChatHistoryUsingPost200ApplicationJson;
var GetChatHistoryUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPost400ApplicationJson, _super);
    function GetChatHistoryUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetChatHistoryUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetChatHistoryUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPost400ApplicationJson = GetChatHistoryUsingPost400ApplicationJson;
var GetChatHistoryUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPost401ApplicationJson, _super);
    function GetChatHistoryUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetChatHistoryUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetChatHistoryUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPost401ApplicationJson = GetChatHistoryUsingPost401ApplicationJson;
var GetChatHistoryUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPost500ApplicationJson, _super);
    function GetChatHistoryUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], GetChatHistoryUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetChatHistoryUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPost500ApplicationJson = GetChatHistoryUsingPost500ApplicationJson;
var GetChatHistoryUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPostRequest, _super);
    function GetChatHistoryUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHistoryUsingPostQueryParams)
    ], GetChatHistoryUsingPostRequest.prototype, "queryParams", void 0);
    return GetChatHistoryUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPostRequest = GetChatHistoryUsingPostRequest;
var GetChatHistoryUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingPostResponse, _super);
    function GetChatHistoryUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetChatHistoryUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHistoryUsingPost200ApplicationJson)
    ], GetChatHistoryUsingPostResponse.prototype, "getChatHistoryUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHistoryUsingPost400ApplicationJson)
    ], GetChatHistoryUsingPostResponse.prototype, "getChatHistoryUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHistoryUsingPost401ApplicationJson)
    ], GetChatHistoryUsingPostResponse.prototype, "getChatHistoryUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatHistoryUsingPost500ApplicationJson)
    ], GetChatHistoryUsingPostResponse.prototype, "getChatHistoryUsingPOST500ApplicationJSONObject", void 0);
    return GetChatHistoryUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.GetChatHistoryUsingPostResponse = GetChatHistoryUsingPostResponse;
