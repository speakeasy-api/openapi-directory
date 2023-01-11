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
exports.SetHtmlUsingPostResponse = exports.SetHtmlUsingPostRequest = exports.SetHtmlUsingPost500ApplicationJson = exports.SetHtmlUsingPost401ApplicationJson = exports.SetHtmlUsingPost400ApplicationJson = exports.SetHtmlUsingPost200ApplicationJson = exports.SetHtmlUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var SetHtmlUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(SetHtmlUsingPostQueryParams, _super);
    function SetHtmlUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=html" }),
        __metadata("design:type", String)
    ], SetHtmlUsingPostQueryParams.prototype, "html", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SetHtmlUsingPostQueryParams.prototype, "padID", void 0);
    return SetHtmlUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.SetHtmlUsingPostQueryParams = SetHtmlUsingPostQueryParams;
var SetHtmlUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetHtmlUsingPost200ApplicationJson, _super);
    function SetHtmlUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetHtmlUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SetHtmlUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetHtmlUsingPost200ApplicationJson.prototype, "message", void 0);
    return SetHtmlUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetHtmlUsingPost200ApplicationJson = SetHtmlUsingPost200ApplicationJson;
var SetHtmlUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(SetHtmlUsingPost400ApplicationJson, _super);
    function SetHtmlUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetHtmlUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SetHtmlUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetHtmlUsingPost400ApplicationJson.prototype, "message", void 0);
    return SetHtmlUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetHtmlUsingPost400ApplicationJson = SetHtmlUsingPost400ApplicationJson;
var SetHtmlUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(SetHtmlUsingPost401ApplicationJson, _super);
    function SetHtmlUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetHtmlUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SetHtmlUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetHtmlUsingPost401ApplicationJson.prototype, "message", void 0);
    return SetHtmlUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetHtmlUsingPost401ApplicationJson = SetHtmlUsingPost401ApplicationJson;
var SetHtmlUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(SetHtmlUsingPost500ApplicationJson, _super);
    function SetHtmlUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetHtmlUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SetHtmlUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetHtmlUsingPost500ApplicationJson.prototype, "message", void 0);
    return SetHtmlUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetHtmlUsingPost500ApplicationJson = SetHtmlUsingPost500ApplicationJson;
var SetHtmlUsingPostRequest = /** @class */ (function (_super) {
    __extends(SetHtmlUsingPostRequest, _super);
    function SetHtmlUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetHtmlUsingPostQueryParams)
    ], SetHtmlUsingPostRequest.prototype, "queryParams", void 0);
    return SetHtmlUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.SetHtmlUsingPostRequest = SetHtmlUsingPostRequest;
var SetHtmlUsingPostResponse = /** @class */ (function (_super) {
    __extends(SetHtmlUsingPostResponse, _super);
    function SetHtmlUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SetHtmlUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SetHtmlUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetHtmlUsingPost200ApplicationJson)
    ], SetHtmlUsingPostResponse.prototype, "setHTMLUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetHtmlUsingPost400ApplicationJson)
    ], SetHtmlUsingPostResponse.prototype, "setHTMLUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetHtmlUsingPost401ApplicationJson)
    ], SetHtmlUsingPostResponse.prototype, "setHTMLUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetHtmlUsingPost500ApplicationJson)
    ], SetHtmlUsingPostResponse.prototype, "setHTMLUsingPOST500ApplicationJSONObject", void 0);
    return SetHtmlUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.SetHtmlUsingPostResponse = SetHtmlUsingPostResponse;
