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
exports.ListAuthorsOfPadUsingPostResponse = exports.ListAuthorsOfPadUsingPostRequest = exports.ListAuthorsOfPadUsingPost500ApplicationJson = exports.ListAuthorsOfPadUsingPost401ApplicationJson = exports.ListAuthorsOfPadUsingPost400ApplicationJson = exports.ListAuthorsOfPadUsingPost200ApplicationJson = exports.ListAuthorsOfPadUsingPost200ApplicationJsonData = exports.ListAuthorsOfPadUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListAuthorsOfPadUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingPostQueryParams, _super);
    function ListAuthorsOfPadUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingPostQueryParams.prototype, "padID", void 0);
    return ListAuthorsOfPadUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingPostQueryParams = ListAuthorsOfPadUsingPostQueryParams;
var ListAuthorsOfPadUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingPost200ApplicationJsonData, _super);
    function ListAuthorsOfPadUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorIDs" }),
        __metadata("design:type", Array)
    ], ListAuthorsOfPadUsingPost200ApplicationJsonData.prototype, "authorIDs", void 0);
    return ListAuthorsOfPadUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingPost200ApplicationJsonData = ListAuthorsOfPadUsingPost200ApplicationJsonData;
var ListAuthorsOfPadUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingPost200ApplicationJson, _super);
    function ListAuthorsOfPadUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ListAuthorsOfPadUsingPost200ApplicationJsonData)
    ], ListAuthorsOfPadUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingPost200ApplicationJson.prototype, "message", void 0);
    return ListAuthorsOfPadUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingPost200ApplicationJson = ListAuthorsOfPadUsingPost200ApplicationJson;
var ListAuthorsOfPadUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingPost400ApplicationJson, _super);
    function ListAuthorsOfPadUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAuthorsOfPadUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingPost400ApplicationJson.prototype, "message", void 0);
    return ListAuthorsOfPadUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingPost400ApplicationJson = ListAuthorsOfPadUsingPost400ApplicationJson;
var ListAuthorsOfPadUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingPost401ApplicationJson, _super);
    function ListAuthorsOfPadUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAuthorsOfPadUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingPost401ApplicationJson.prototype, "message", void 0);
    return ListAuthorsOfPadUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingPost401ApplicationJson = ListAuthorsOfPadUsingPost401ApplicationJson;
var ListAuthorsOfPadUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingPost500ApplicationJson, _super);
    function ListAuthorsOfPadUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAuthorsOfPadUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingPost500ApplicationJson.prototype, "message", void 0);
    return ListAuthorsOfPadUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingPost500ApplicationJson = ListAuthorsOfPadUsingPost500ApplicationJson;
var ListAuthorsOfPadUsingPostRequest = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingPostRequest, _super);
    function ListAuthorsOfPadUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingPostQueryParams)
    ], ListAuthorsOfPadUsingPostRequest.prototype, "queryParams", void 0);
    return ListAuthorsOfPadUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingPostRequest = ListAuthorsOfPadUsingPostRequest;
var ListAuthorsOfPadUsingPostResponse = /** @class */ (function (_super) {
    __extends(ListAuthorsOfPadUsingPostResponse, _super);
    function ListAuthorsOfPadUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAuthorsOfPadUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAuthorsOfPadUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingPost200ApplicationJson)
    ], ListAuthorsOfPadUsingPostResponse.prototype, "listAuthorsOfPadUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingPost400ApplicationJson)
    ], ListAuthorsOfPadUsingPostResponse.prototype, "listAuthorsOfPadUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingPost401ApplicationJson)
    ], ListAuthorsOfPadUsingPostResponse.prototype, "listAuthorsOfPadUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAuthorsOfPadUsingPost500ApplicationJson)
    ], ListAuthorsOfPadUsingPostResponse.prototype, "listAuthorsOfPadUsingPOST500ApplicationJSONObject", void 0);
    return ListAuthorsOfPadUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.ListAuthorsOfPadUsingPostResponse = ListAuthorsOfPadUsingPostResponse;
