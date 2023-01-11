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
exports.GetVolumesNameJsonResponse = exports.GetVolumesNameJsonRequest = exports.GetVolumesNameJsonHeaders = exports.GetVolumesNameJsonPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetVolumesNameJsonPathParams = /** @class */ (function (_super) {
    __extends(GetVolumesNameJsonPathParams, _super);
    function GetVolumesNameJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetVolumesNameJsonPathParams.prototype, "name", void 0);
    return GetVolumesNameJsonPathParams;
}(utils_1.SpeakeasyBase));
exports.GetVolumesNameJsonPathParams = GetVolumesNameJsonPathParams;
var GetVolumesNameJsonHeaders = /** @class */ (function (_super) {
    __extends(GetVolumesNameJsonHeaders, _super);
    function GetVolumesNameJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], GetVolumesNameJsonHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], GetVolumesNameJsonHeaders.prototype, "xAuthToken", void 0);
    return GetVolumesNameJsonHeaders;
}(utils_1.SpeakeasyBase));
exports.GetVolumesNameJsonHeaders = GetVolumesNameJsonHeaders;
var GetVolumesNameJsonRequest = /** @class */ (function (_super) {
    __extends(GetVolumesNameJsonRequest, _super);
    function GetVolumesNameJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVolumesNameJsonPathParams)
    ], GetVolumesNameJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVolumesNameJsonHeaders)
    ], GetVolumesNameJsonRequest.prototype, "headers", void 0);
    return GetVolumesNameJsonRequest;
}(utils_1.SpeakeasyBase));
exports.GetVolumesNameJsonRequest = GetVolumesNameJsonRequest;
var GetVolumesNameJsonResponse = /** @class */ (function (_super) {
    __extends(GetVolumesNameJsonResponse, _super);
    function GetVolumesNameJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetVolumesNameJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetVolumesNameJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetVolumesNameJsonResponse.prototype, "volume", void 0);
    return GetVolumesNameJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetVolumesNameJsonResponse = GetVolumesNameJsonResponse;
