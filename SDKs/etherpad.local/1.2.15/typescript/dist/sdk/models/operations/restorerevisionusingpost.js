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
exports.RestoreRevisionUsingPostResponse = exports.RestoreRevisionUsingPostRequest = exports.RestoreRevisionUsingPost500ApplicationJson = exports.RestoreRevisionUsingPost401ApplicationJson = exports.RestoreRevisionUsingPost400ApplicationJson = exports.RestoreRevisionUsingPost200ApplicationJson = exports.RestoreRevisionUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var RestoreRevisionUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingPostQueryParams, _super);
    function RestoreRevisionUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingPostQueryParams.prototype, "padID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingPostQueryParams.prototype, "rev", void 0);
    return RestoreRevisionUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.RestoreRevisionUsingPostQueryParams = RestoreRevisionUsingPostQueryParams;
var RestoreRevisionUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingPost200ApplicationJson, _super);
    function RestoreRevisionUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], RestoreRevisionUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingPost200ApplicationJson.prototype, "message", void 0);
    return RestoreRevisionUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RestoreRevisionUsingPost200ApplicationJson = RestoreRevisionUsingPost200ApplicationJson;
var RestoreRevisionUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingPost400ApplicationJson, _super);
    function RestoreRevisionUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], RestoreRevisionUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingPost400ApplicationJson.prototype, "message", void 0);
    return RestoreRevisionUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RestoreRevisionUsingPost400ApplicationJson = RestoreRevisionUsingPost400ApplicationJson;
var RestoreRevisionUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingPost401ApplicationJson, _super);
    function RestoreRevisionUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], RestoreRevisionUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingPost401ApplicationJson.prototype, "message", void 0);
    return RestoreRevisionUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RestoreRevisionUsingPost401ApplicationJson = RestoreRevisionUsingPost401ApplicationJson;
var RestoreRevisionUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingPost500ApplicationJson, _super);
    function RestoreRevisionUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], RestoreRevisionUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingPost500ApplicationJson.prototype, "message", void 0);
    return RestoreRevisionUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RestoreRevisionUsingPost500ApplicationJson = RestoreRevisionUsingPost500ApplicationJson;
var RestoreRevisionUsingPostRequest = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingPostRequest, _super);
    function RestoreRevisionUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RestoreRevisionUsingPostQueryParams)
    ], RestoreRevisionUsingPostRequest.prototype, "queryParams", void 0);
    return RestoreRevisionUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.RestoreRevisionUsingPostRequest = RestoreRevisionUsingPostRequest;
var RestoreRevisionUsingPostResponse = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingPostResponse, _super);
    function RestoreRevisionUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RestoreRevisionUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RestoreRevisionUsingPost200ApplicationJson)
    ], RestoreRevisionUsingPostResponse.prototype, "restoreRevisionUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RestoreRevisionUsingPost400ApplicationJson)
    ], RestoreRevisionUsingPostResponse.prototype, "restoreRevisionUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RestoreRevisionUsingPost401ApplicationJson)
    ], RestoreRevisionUsingPostResponse.prototype, "restoreRevisionUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RestoreRevisionUsingPost500ApplicationJson)
    ], RestoreRevisionUsingPostResponse.prototype, "restoreRevisionUsingPOST500ApplicationJSONObject", void 0);
    return RestoreRevisionUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.RestoreRevisionUsingPostResponse = RestoreRevisionUsingPostResponse;
