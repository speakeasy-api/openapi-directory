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
exports.PadUsersUsingPostResponse = exports.PadUsersUsingPostRequest = exports.PadUsersUsingPost500ApplicationJson = exports.PadUsersUsingPost401ApplicationJson = exports.PadUsersUsingPost400ApplicationJson = exports.PadUsersUsingPost200ApplicationJson = exports.PadUsersUsingPost200ApplicationJsonData = exports.PadUsersUsingPost200ApplicationJsonDataPadUsers = exports.PadUsersUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var PadUsersUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(PadUsersUsingPostQueryParams, _super);
    function PadUsersUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], PadUsersUsingPostQueryParams.prototype, "padID", void 0);
    return PadUsersUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPostQueryParams = PadUsersUsingPostQueryParams;
var PadUsersUsingPost200ApplicationJsonDataPadUsers = /** @class */ (function (_super) {
    __extends(PadUsersUsingPost200ApplicationJsonDataPadUsers, _super);
    function PadUsersUsingPost200ApplicationJsonDataPadUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=colorId" }),
        __metadata("design:type", String)
    ], PadUsersUsingPost200ApplicationJsonDataPadUsers.prototype, "colorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PadUsersUsingPost200ApplicationJsonDataPadUsers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PadUsersUsingPost200ApplicationJsonDataPadUsers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Number)
    ], PadUsersUsingPost200ApplicationJsonDataPadUsers.prototype, "timestamp", void 0);
    return PadUsersUsingPost200ApplicationJsonDataPadUsers;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPost200ApplicationJsonDataPadUsers = PadUsersUsingPost200ApplicationJsonDataPadUsers;
var PadUsersUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(PadUsersUsingPost200ApplicationJsonData, _super);
    function PadUsersUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=padUsers", elemType: PadUsersUsingPost200ApplicationJsonDataPadUsers }),
        __metadata("design:type", Array)
    ], PadUsersUsingPost200ApplicationJsonData.prototype, "padUsers", void 0);
    return PadUsersUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPost200ApplicationJsonData = PadUsersUsingPost200ApplicationJsonData;
var PadUsersUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersUsingPost200ApplicationJson, _super);
    function PadUsersUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", PadUsersUsingPost200ApplicationJsonData)
    ], PadUsersUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersUsingPost200ApplicationJson.prototype, "message", void 0);
    return PadUsersUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPost200ApplicationJson = PadUsersUsingPost200ApplicationJson;
var PadUsersUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersUsingPost400ApplicationJson, _super);
    function PadUsersUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], PadUsersUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersUsingPost400ApplicationJson.prototype, "message", void 0);
    return PadUsersUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPost400ApplicationJson = PadUsersUsingPost400ApplicationJson;
var PadUsersUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersUsingPost401ApplicationJson, _super);
    function PadUsersUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], PadUsersUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersUsingPost401ApplicationJson.prototype, "message", void 0);
    return PadUsersUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPost401ApplicationJson = PadUsersUsingPost401ApplicationJson;
var PadUsersUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersUsingPost500ApplicationJson, _super);
    function PadUsersUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], PadUsersUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersUsingPost500ApplicationJson.prototype, "message", void 0);
    return PadUsersUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPost500ApplicationJson = PadUsersUsingPost500ApplicationJson;
var PadUsersUsingPostRequest = /** @class */ (function (_super) {
    __extends(PadUsersUsingPostRequest, _super);
    function PadUsersUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingPostQueryParams)
    ], PadUsersUsingPostRequest.prototype, "queryParams", void 0);
    return PadUsersUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPostRequest = PadUsersUsingPostRequest;
var PadUsersUsingPostResponse = /** @class */ (function (_super) {
    __extends(PadUsersUsingPostResponse, _super);
    function PadUsersUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PadUsersUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PadUsersUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingPost200ApplicationJson)
    ], PadUsersUsingPostResponse.prototype, "padUsersUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingPost400ApplicationJson)
    ], PadUsersUsingPostResponse.prototype, "padUsersUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingPost401ApplicationJson)
    ], PadUsersUsingPostResponse.prototype, "padUsersUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PadUsersUsingPost500ApplicationJson)
    ], PadUsersUsingPostResponse.prototype, "padUsersUsingPOST500ApplicationJSONObject", void 0);
    return PadUsersUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.PadUsersUsingPostResponse = PadUsersUsingPostResponse;
