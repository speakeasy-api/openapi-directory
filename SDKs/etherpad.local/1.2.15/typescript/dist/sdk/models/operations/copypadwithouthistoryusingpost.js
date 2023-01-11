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
exports.CopyPadWithoutHistoryUsingPostResponse = exports.CopyPadWithoutHistoryUsingPostRequest = exports.CopyPadWithoutHistoryUsingPost500ApplicationJson = exports.CopyPadWithoutHistoryUsingPost401ApplicationJson = exports.CopyPadWithoutHistoryUsingPost400ApplicationJson = exports.CopyPadWithoutHistoryUsingPost200ApplicationJson = exports.CopyPadWithoutHistoryUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CopyPadWithoutHistoryUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPostQueryParams, _super);
    function CopyPadWithoutHistoryUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destinationID" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPostQueryParams.prototype, "destinationID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPostQueryParams.prototype, "force", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceID" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPostQueryParams.prototype, "sourceID", void 0);
    return CopyPadWithoutHistoryUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingPostQueryParams = CopyPadWithoutHistoryUsingPostQueryParams;
var CopyPadWithoutHistoryUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPost200ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CopyPadWithoutHistoryUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPost200ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingPost200ApplicationJson = CopyPadWithoutHistoryUsingPost200ApplicationJson;
var CopyPadWithoutHistoryUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPost400ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CopyPadWithoutHistoryUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPost400ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingPost400ApplicationJson = CopyPadWithoutHistoryUsingPost400ApplicationJson;
var CopyPadWithoutHistoryUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPost401ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CopyPadWithoutHistoryUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPost401ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingPost401ApplicationJson = CopyPadWithoutHistoryUsingPost401ApplicationJson;
var CopyPadWithoutHistoryUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPost500ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CopyPadWithoutHistoryUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPost500ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingPost500ApplicationJson = CopyPadWithoutHistoryUsingPost500ApplicationJson;
var CopyPadWithoutHistoryUsingPostRequest = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPostRequest, _super);
    function CopyPadWithoutHistoryUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPostQueryParams)
    ], CopyPadWithoutHistoryUsingPostRequest.prototype, "queryParams", void 0);
    return CopyPadWithoutHistoryUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingPostRequest = CopyPadWithoutHistoryUsingPostRequest;
var CopyPadWithoutHistoryUsingPostResponse = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPostResponse, _super);
    function CopyPadWithoutHistoryUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPost200ApplicationJson)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "copyPadWithoutHistoryUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPost400ApplicationJson)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "copyPadWithoutHistoryUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPost401ApplicationJson)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "copyPadWithoutHistoryUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPost500ApplicationJson)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "copyPadWithoutHistoryUsingPOST500ApplicationJSONObject", void 0);
    return CopyPadWithoutHistoryUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.CopyPadWithoutHistoryUsingPostResponse = CopyPadWithoutHistoryUsingPostResponse;
