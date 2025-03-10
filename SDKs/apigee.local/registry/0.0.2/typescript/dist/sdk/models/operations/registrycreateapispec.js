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
exports.RegistryCreateApiSpecResponse = exports.RegistryCreateApiSpecRequest = exports.RegistryCreateApiSpecQueryParams = exports.RegistryCreateApiSpecPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistryCreateApiSpecPathParams = /** @class */ (function (_super) {
    __extends(RegistryCreateApiSpecPathParams, _super);
    function RegistryCreateApiSpecPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryCreateApiSpecPathParams.prototype, "api", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryCreateApiSpecPathParams.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], RegistryCreateApiSpecPathParams.prototype, "version", void 0);
    return RegistryCreateApiSpecPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistryCreateApiSpecPathParams = RegistryCreateApiSpecPathParams;
var RegistryCreateApiSpecQueryParams = /** @class */ (function (_super) {
    __extends(RegistryCreateApiSpecQueryParams, _super);
    function RegistryCreateApiSpecQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_spec_id" }),
        __metadata("design:type", String)
    ], RegistryCreateApiSpecQueryParams.prototype, "apiSpecId", void 0);
    return RegistryCreateApiSpecQueryParams;
}(utils_1.SpeakeasyBase));
exports.RegistryCreateApiSpecQueryParams = RegistryCreateApiSpecQueryParams;
var RegistryCreateApiSpecRequest = /** @class */ (function (_super) {
    __extends(RegistryCreateApiSpecRequest, _super);
    function RegistryCreateApiSpecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryCreateApiSpecPathParams)
    ], RegistryCreateApiSpecRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryCreateApiSpecQueryParams)
    ], RegistryCreateApiSpecRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RegistryCreateApiSpecRequest.prototype, "request", void 0);
    return RegistryCreateApiSpecRequest;
}(utils_1.SpeakeasyBase));
exports.RegistryCreateApiSpecRequest = RegistryCreateApiSpecRequest;
var RegistryCreateApiSpecResponse = /** @class */ (function (_super) {
    __extends(RegistryCreateApiSpecResponse, _super);
    function RegistryCreateApiSpecResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RegistryCreateApiSpecResponse.prototype, "apiSpec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistryCreateApiSpecResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistryCreateApiSpecResponse.prototype, "statusCode", void 0);
    return RegistryCreateApiSpecResponse;
}(utils_1.SpeakeasyBase));
exports.RegistryCreateApiSpecResponse = RegistryCreateApiSpecResponse;
