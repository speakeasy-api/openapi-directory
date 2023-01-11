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
exports.RegistryListApisResponse = exports.RegistryListApisRequest = exports.RegistryListApisQueryParams = exports.RegistryListApisPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistryListApisPathParams = /** @class */ (function (_super) {
    __extends(RegistryListApisPathParams, _super);
    function RegistryListApisPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryListApisPathParams.prototype, "project", void 0);
    return RegistryListApisPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistryListApisPathParams = RegistryListApisPathParams;
var RegistryListApisQueryParams = /** @class */ (function (_super) {
    __extends(RegistryListApisQueryParams, _super);
    function RegistryListApisQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RegistryListApisQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], RegistryListApisQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_token" }),
        __metadata("design:type", String)
    ], RegistryListApisQueryParams.prototype, "pageToken", void 0);
    return RegistryListApisQueryParams;
}(utils_1.SpeakeasyBase));
exports.RegistryListApisQueryParams = RegistryListApisQueryParams;
var RegistryListApisRequest = /** @class */ (function (_super) {
    __extends(RegistryListApisRequest, _super);
    function RegistryListApisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryListApisPathParams)
    ], RegistryListApisRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryListApisQueryParams)
    ], RegistryListApisRequest.prototype, "queryParams", void 0);
    return RegistryListApisRequest;
}(utils_1.SpeakeasyBase));
exports.RegistryListApisRequest = RegistryListApisRequest;
var RegistryListApisResponse = /** @class */ (function (_super) {
    __extends(RegistryListApisResponse, _super);
    function RegistryListApisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistryListApisResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RegistryListApisResponse.prototype, "listApisResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistryListApisResponse.prototype, "statusCode", void 0);
    return RegistryListApisResponse;
}(utils_1.SpeakeasyBase));
exports.RegistryListApisResponse = RegistryListApisResponse;
