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
exports.CreateSessionUsingPostResponse = exports.CreateSessionUsingPostRequest = exports.CreateSessionUsingPost500ApplicationJson = exports.CreateSessionUsingPost401ApplicationJson = exports.CreateSessionUsingPost400ApplicationJson = exports.CreateSessionUsingPost200ApplicationJson = exports.CreateSessionUsingPost200ApplicationJsonData = exports.CreateSessionUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateSessionUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CreateSessionUsingPostQueryParams, _super);
    function CreateSessionUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingPostQueryParams.prototype, "authorID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingPostQueryParams.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=validUntil" }),
        __metadata("design:type", String)
    ], CreateSessionUsingPostQueryParams.prototype, "validUntil", void 0);
    return CreateSessionUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingPostQueryParams = CreateSessionUsingPostQueryParams;
var CreateSessionUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateSessionUsingPost200ApplicationJsonData, _super);
    function CreateSessionUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessionID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingPost200ApplicationJsonData.prototype, "sessionID", void 0);
    return CreateSessionUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingPost200ApplicationJsonData = CreateSessionUsingPost200ApplicationJsonData;
var CreateSessionUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingPost200ApplicationJson, _super);
    function CreateSessionUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", CreateSessionUsingPost200ApplicationJsonData)
    ], CreateSessionUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingPost200ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingPost200ApplicationJson = CreateSessionUsingPost200ApplicationJson;
var CreateSessionUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingPost400ApplicationJson, _super);
    function CreateSessionUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateSessionUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingPost400ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingPost400ApplicationJson = CreateSessionUsingPost400ApplicationJson;
var CreateSessionUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingPost401ApplicationJson, _super);
    function CreateSessionUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateSessionUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingPost401ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingPost401ApplicationJson = CreateSessionUsingPost401ApplicationJson;
var CreateSessionUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingPost500ApplicationJson, _super);
    function CreateSessionUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateSessionUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingPost500ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingPost500ApplicationJson = CreateSessionUsingPost500ApplicationJson;
var CreateSessionUsingPostRequest = /** @class */ (function (_super) {
    __extends(CreateSessionUsingPostRequest, _super);
    function CreateSessionUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingPostQueryParams)
    ], CreateSessionUsingPostRequest.prototype, "queryParams", void 0);
    return CreateSessionUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingPostRequest = CreateSessionUsingPostRequest;
var CreateSessionUsingPostResponse = /** @class */ (function (_super) {
    __extends(CreateSessionUsingPostResponse, _super);
    function CreateSessionUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSessionUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSessionUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingPost200ApplicationJson)
    ], CreateSessionUsingPostResponse.prototype, "createSessionUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingPost400ApplicationJson)
    ], CreateSessionUsingPostResponse.prototype, "createSessionUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingPost401ApplicationJson)
    ], CreateSessionUsingPostResponse.prototype, "createSessionUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSessionUsingPost500ApplicationJson)
    ], CreateSessionUsingPostResponse.prototype, "createSessionUsingPOST500ApplicationJSONObject", void 0);
    return CreateSessionUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSessionUsingPostResponse = CreateSessionUsingPostResponse;
