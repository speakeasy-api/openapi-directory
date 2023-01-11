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
exports.ListSavedRevisionsUsingPostResponse = exports.ListSavedRevisionsUsingPostRequest = exports.ListSavedRevisionsUsingPost500ApplicationJson = exports.ListSavedRevisionsUsingPost401ApplicationJson = exports.ListSavedRevisionsUsingPost400ApplicationJson = exports.ListSavedRevisionsUsingPost200ApplicationJson = exports.ListSavedRevisionsUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListSavedRevisionsUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingPostQueryParams, _super);
    function ListSavedRevisionsUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingPostQueryParams.prototype, "padID", void 0);
    return ListSavedRevisionsUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingPostQueryParams = ListSavedRevisionsUsingPostQueryParams;
var ListSavedRevisionsUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingPost200ApplicationJson, _super);
    function ListSavedRevisionsUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSavedRevisionsUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingPost200ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingPost200ApplicationJson = ListSavedRevisionsUsingPost200ApplicationJson;
var ListSavedRevisionsUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingPost400ApplicationJson, _super);
    function ListSavedRevisionsUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSavedRevisionsUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingPost400ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingPost400ApplicationJson = ListSavedRevisionsUsingPost400ApplicationJson;
var ListSavedRevisionsUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingPost401ApplicationJson, _super);
    function ListSavedRevisionsUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSavedRevisionsUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingPost401ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingPost401ApplicationJson = ListSavedRevisionsUsingPost401ApplicationJson;
var ListSavedRevisionsUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingPost500ApplicationJson, _super);
    function ListSavedRevisionsUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSavedRevisionsUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingPost500ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingPost500ApplicationJson = ListSavedRevisionsUsingPost500ApplicationJson;
var ListSavedRevisionsUsingPostRequest = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingPostRequest, _super);
    function ListSavedRevisionsUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingPostQueryParams)
    ], ListSavedRevisionsUsingPostRequest.prototype, "queryParams", void 0);
    return ListSavedRevisionsUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingPostRequest = ListSavedRevisionsUsingPostRequest;
var ListSavedRevisionsUsingPostResponse = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingPostResponse, _super);
    function ListSavedRevisionsUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingPost200ApplicationJson)
    ], ListSavedRevisionsUsingPostResponse.prototype, "listSavedRevisionsUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingPost400ApplicationJson)
    ], ListSavedRevisionsUsingPostResponse.prototype, "listSavedRevisionsUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingPost401ApplicationJson)
    ], ListSavedRevisionsUsingPostResponse.prototype, "listSavedRevisionsUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSavedRevisionsUsingPost500ApplicationJson)
    ], ListSavedRevisionsUsingPostResponse.prototype, "listSavedRevisionsUsingPOST500ApplicationJSONObject", void 0);
    return ListSavedRevisionsUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.ListSavedRevisionsUsingPostResponse = ListSavedRevisionsUsingPostResponse;
