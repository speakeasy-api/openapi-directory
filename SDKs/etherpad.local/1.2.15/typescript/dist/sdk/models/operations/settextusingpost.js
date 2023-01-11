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
exports.SetTextUsingPostResponse = exports.SetTextUsingPostRequest = exports.SetTextUsingPost500ApplicationJson = exports.SetTextUsingPost401ApplicationJson = exports.SetTextUsingPost400ApplicationJson = exports.SetTextUsingPost200ApplicationJson = exports.SetTextUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var SetTextUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(SetTextUsingPostQueryParams, _super);
    function SetTextUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SetTextUsingPostQueryParams.prototype, "padID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SetTextUsingPostQueryParams.prototype, "text", void 0);
    return SetTextUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.SetTextUsingPostQueryParams = SetTextUsingPostQueryParams;
var SetTextUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetTextUsingPost200ApplicationJson, _super);
    function SetTextUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetTextUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SetTextUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetTextUsingPost200ApplicationJson.prototype, "message", void 0);
    return SetTextUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetTextUsingPost200ApplicationJson = SetTextUsingPost200ApplicationJson;
var SetTextUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(SetTextUsingPost400ApplicationJson, _super);
    function SetTextUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetTextUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SetTextUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetTextUsingPost400ApplicationJson.prototype, "message", void 0);
    return SetTextUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetTextUsingPost400ApplicationJson = SetTextUsingPost400ApplicationJson;
var SetTextUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(SetTextUsingPost401ApplicationJson, _super);
    function SetTextUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetTextUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SetTextUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetTextUsingPost401ApplicationJson.prototype, "message", void 0);
    return SetTextUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetTextUsingPost401ApplicationJson = SetTextUsingPost401ApplicationJson;
var SetTextUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(SetTextUsingPost500ApplicationJson, _super);
    function SetTextUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetTextUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SetTextUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetTextUsingPost500ApplicationJson.prototype, "message", void 0);
    return SetTextUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetTextUsingPost500ApplicationJson = SetTextUsingPost500ApplicationJson;
var SetTextUsingPostRequest = /** @class */ (function (_super) {
    __extends(SetTextUsingPostRequest, _super);
    function SetTextUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetTextUsingPostQueryParams)
    ], SetTextUsingPostRequest.prototype, "queryParams", void 0);
    return SetTextUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.SetTextUsingPostRequest = SetTextUsingPostRequest;
var SetTextUsingPostResponse = /** @class */ (function (_super) {
    __extends(SetTextUsingPostResponse, _super);
    function SetTextUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SetTextUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SetTextUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetTextUsingPost200ApplicationJson)
    ], SetTextUsingPostResponse.prototype, "setTextUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetTextUsingPost400ApplicationJson)
    ], SetTextUsingPostResponse.prototype, "setTextUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetTextUsingPost401ApplicationJson)
    ], SetTextUsingPostResponse.prototype, "setTextUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetTextUsingPost500ApplicationJson)
    ], SetTextUsingPostResponse.prototype, "setTextUsingPOST500ApplicationJSONObject", void 0);
    return SetTextUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.SetTextUsingPostResponse = SetTextUsingPostResponse;
