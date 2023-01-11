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
exports.ListSessionsOfGroupUsingPostResponse = exports.ListSessionsOfGroupUsingPostRequest = exports.ListSessionsOfGroupUsingPost500ApplicationJson = exports.ListSessionsOfGroupUsingPost401ApplicationJson = exports.ListSessionsOfGroupUsingPost400ApplicationJson = exports.ListSessionsOfGroupUsingPost200ApplicationJson = exports.ListSessionsOfGroupUsingPost200ApplicationJsonData = exports.ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions = exports.ListSessionsOfGroupUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListSessionsOfGroupUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPostQueryParams, _super);
    function ListSessionsOfGroupUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPostQueryParams.prototype, "groupID", void 0);
    return ListSessionsOfGroupUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPostQueryParams = ListSessionsOfGroupUsingPostQueryParams;
var ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions, _super);
    function ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions.prototype, "authorID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions.prototype, "validUntil", void 0);
    return ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions = ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions;
var ListSessionsOfGroupUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPost200ApplicationJsonData, _super);
    function ListSessionsOfGroupUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessions", elemType: ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions }),
        __metadata("design:type", Array)
    ], ListSessionsOfGroupUsingPost200ApplicationJsonData.prototype, "sessions", void 0);
    return ListSessionsOfGroupUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPost200ApplicationJsonData = ListSessionsOfGroupUsingPost200ApplicationJsonData;
var ListSessionsOfGroupUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPost200ApplicationJson, _super);
    function ListSessionsOfGroupUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ListSessionsOfGroupUsingPost200ApplicationJsonData)
    ], ListSessionsOfGroupUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPost200ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfGroupUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPost200ApplicationJson = ListSessionsOfGroupUsingPost200ApplicationJson;
var ListSessionsOfGroupUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPost400ApplicationJson, _super);
    function ListSessionsOfGroupUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSessionsOfGroupUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPost400ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfGroupUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPost400ApplicationJson = ListSessionsOfGroupUsingPost400ApplicationJson;
var ListSessionsOfGroupUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPost401ApplicationJson, _super);
    function ListSessionsOfGroupUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSessionsOfGroupUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPost401ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfGroupUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPost401ApplicationJson = ListSessionsOfGroupUsingPost401ApplicationJson;
var ListSessionsOfGroupUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPost500ApplicationJson, _super);
    function ListSessionsOfGroupUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListSessionsOfGroupUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPost500ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfGroupUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPost500ApplicationJson = ListSessionsOfGroupUsingPost500ApplicationJson;
var ListSessionsOfGroupUsingPostRequest = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPostRequest, _super);
    function ListSessionsOfGroupUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfGroupUsingPostQueryParams)
    ], ListSessionsOfGroupUsingPostRequest.prototype, "queryParams", void 0);
    return ListSessionsOfGroupUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPostRequest = ListSessionsOfGroupUsingPostRequest;
var ListSessionsOfGroupUsingPostResponse = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingPostResponse, _super);
    function ListSessionsOfGroupUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfGroupUsingPost200ApplicationJson)
    ], ListSessionsOfGroupUsingPostResponse.prototype, "listSessionsOfGroupUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfGroupUsingPost400ApplicationJson)
    ], ListSessionsOfGroupUsingPostResponse.prototype, "listSessionsOfGroupUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfGroupUsingPost401ApplicationJson)
    ], ListSessionsOfGroupUsingPostResponse.prototype, "listSessionsOfGroupUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSessionsOfGroupUsingPost500ApplicationJson)
    ], ListSessionsOfGroupUsingPostResponse.prototype, "listSessionsOfGroupUsingPOST500ApplicationJSONObject", void 0);
    return ListSessionsOfGroupUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.ListSessionsOfGroupUsingPostResponse = ListSessionsOfGroupUsingPostResponse;
