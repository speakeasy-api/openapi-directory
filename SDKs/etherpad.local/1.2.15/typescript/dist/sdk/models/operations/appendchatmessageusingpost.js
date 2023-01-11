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
exports.AppendChatMessageUsingPostResponse = exports.AppendChatMessageUsingPostRequest = exports.AppendChatMessageUsingPost500ApplicationJson = exports.AppendChatMessageUsingPost401ApplicationJson = exports.AppendChatMessageUsingPost400ApplicationJson = exports.AppendChatMessageUsingPost200ApplicationJson = exports.AppendChatMessageUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var AppendChatMessageUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingPostQueryParams, _super);
    function AppendChatMessageUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPostQueryParams.prototype, "authorID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPostQueryParams.prototype, "padID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPostQueryParams.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPostQueryParams.prototype, "time", void 0);
    return AppendChatMessageUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.AppendChatMessageUsingPostQueryParams = AppendChatMessageUsingPostQueryParams;
var AppendChatMessageUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingPost200ApplicationJson, _super);
    function AppendChatMessageUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], AppendChatMessageUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPost200ApplicationJson.prototype, "message", void 0);
    return AppendChatMessageUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AppendChatMessageUsingPost200ApplicationJson = AppendChatMessageUsingPost200ApplicationJson;
var AppendChatMessageUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingPost400ApplicationJson, _super);
    function AppendChatMessageUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], AppendChatMessageUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPost400ApplicationJson.prototype, "message", void 0);
    return AppendChatMessageUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AppendChatMessageUsingPost400ApplicationJson = AppendChatMessageUsingPost400ApplicationJson;
var AppendChatMessageUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingPost401ApplicationJson, _super);
    function AppendChatMessageUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], AppendChatMessageUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPost401ApplicationJson.prototype, "message", void 0);
    return AppendChatMessageUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AppendChatMessageUsingPost401ApplicationJson = AppendChatMessageUsingPost401ApplicationJson;
var AppendChatMessageUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingPost500ApplicationJson, _super);
    function AppendChatMessageUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], AppendChatMessageUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPost500ApplicationJson.prototype, "message", void 0);
    return AppendChatMessageUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AppendChatMessageUsingPost500ApplicationJson = AppendChatMessageUsingPost500ApplicationJson;
var AppendChatMessageUsingPostRequest = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingPostRequest, _super);
    function AppendChatMessageUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppendChatMessageUsingPostQueryParams)
    ], AppendChatMessageUsingPostRequest.prototype, "queryParams", void 0);
    return AppendChatMessageUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.AppendChatMessageUsingPostRequest = AppendChatMessageUsingPostRequest;
var AppendChatMessageUsingPostResponse = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingPostResponse, _super);
    function AppendChatMessageUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppendChatMessageUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppendChatMessageUsingPost200ApplicationJson)
    ], AppendChatMessageUsingPostResponse.prototype, "appendChatMessageUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppendChatMessageUsingPost400ApplicationJson)
    ], AppendChatMessageUsingPostResponse.prototype, "appendChatMessageUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppendChatMessageUsingPost401ApplicationJson)
    ], AppendChatMessageUsingPostResponse.prototype, "appendChatMessageUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppendChatMessageUsingPost500ApplicationJson)
    ], AppendChatMessageUsingPostResponse.prototype, "appendChatMessageUsingPOST500ApplicationJSONObject", void 0);
    return AppendChatMessageUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.AppendChatMessageUsingPostResponse = AppendChatMessageUsingPostResponse;
