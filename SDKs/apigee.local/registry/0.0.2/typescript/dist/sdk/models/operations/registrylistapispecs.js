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
exports.RegistryListApiSpecsResponse = exports.RegistryListApiSpecsRequest = exports.RegistryListApiSpecsQueryParams = exports.RegistryListApiSpecsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistryListApiSpecsPathParams = /** @class */ (function (_super) {
    __extends(RegistryListApiSpecsPathParams, _super);
    function RegistryListApiSpecsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryListApiSpecsPathParams.prototype, "api", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryListApiSpecsPathParams.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], RegistryListApiSpecsPathParams.prototype, "version", void 0);
    return RegistryListApiSpecsPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistryListApiSpecsPathParams = RegistryListApiSpecsPathParams;
var RegistryListApiSpecsQueryParams = /** @class */ (function (_super) {
    __extends(RegistryListApiSpecsQueryParams, _super);
    function RegistryListApiSpecsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RegistryListApiSpecsQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], RegistryListApiSpecsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_token" }),
        __metadata("design:type", String)
    ], RegistryListApiSpecsQueryParams.prototype, "pageToken", void 0);
    return RegistryListApiSpecsQueryParams;
}(utils_1.SpeakeasyBase));
exports.RegistryListApiSpecsQueryParams = RegistryListApiSpecsQueryParams;
var RegistryListApiSpecsRequest = /** @class */ (function (_super) {
    __extends(RegistryListApiSpecsRequest, _super);
    function RegistryListApiSpecsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryListApiSpecsPathParams)
    ], RegistryListApiSpecsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryListApiSpecsQueryParams)
    ], RegistryListApiSpecsRequest.prototype, "queryParams", void 0);
    return RegistryListApiSpecsRequest;
}(utils_1.SpeakeasyBase));
exports.RegistryListApiSpecsRequest = RegistryListApiSpecsRequest;
var RegistryListApiSpecsResponse = /** @class */ (function (_super) {
    __extends(RegistryListApiSpecsResponse, _super);
    function RegistryListApiSpecsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistryListApiSpecsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RegistryListApiSpecsResponse.prototype, "listApiSpecsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistryListApiSpecsResponse.prototype, "statusCode", void 0);
    return RegistryListApiSpecsResponse;
}(utils_1.SpeakeasyBase));
exports.RegistryListApiSpecsResponse = RegistryListApiSpecsResponse;
