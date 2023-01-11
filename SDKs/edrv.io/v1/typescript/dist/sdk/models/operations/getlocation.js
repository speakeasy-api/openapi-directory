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
exports.GetLocationResponse = exports.GetLocationRequest = exports.GetLocationQueryParams = exports.GetLocationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetLocationPathParams = /** @class */ (function (_super) {
    __extends(GetLocationPathParams, _super);
    function GetLocationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetLocationPathParams.prototype, "id", void 0);
    return GetLocationPathParams;
}(utils_1.SpeakeasyBase));
exports.GetLocationPathParams = GetLocationPathParams;
var GetLocationQueryParams = /** @class */ (function (_super) {
    __extends(GetLocationQueryParams, _super);
    function GetLocationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_chargestations" }),
        __metadata("design:type", Boolean)
    ], GetLocationQueryParams.prototype, "includeChargestations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetLocationQueryParams.prototype, "includeOrganization", void 0);
    return GetLocationQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetLocationQueryParams = GetLocationQueryParams;
var GetLocationRequest = /** @class */ (function (_super) {
    __extends(GetLocationRequest, _super);
    function GetLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLocationPathParams)
    ], GetLocationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLocationQueryParams)
    ], GetLocationRequest.prototype, "queryParams", void 0);
    return GetLocationRequest;
}(utils_1.SpeakeasyBase));
exports.GetLocationRequest = GetLocationRequest;
var GetLocationResponse = /** @class */ (function (_super) {
    __extends(GetLocationResponse, _super);
    function GetLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLocationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLocationResponse.prototype, "statusCode", void 0);
    return GetLocationResponse;
}(utils_1.SpeakeasyBase));
exports.GetLocationResponse = GetLocationResponse;
