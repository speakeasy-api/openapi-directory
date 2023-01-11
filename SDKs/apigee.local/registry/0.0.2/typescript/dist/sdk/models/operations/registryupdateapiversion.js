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
exports.RegistryUpdateApiVersionResponse = exports.RegistryUpdateApiVersionRequest = exports.RegistryUpdateApiVersionQueryParams = exports.RegistryUpdateApiVersionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistryUpdateApiVersionPathParams = /** @class */ (function (_super) {
    __extends(RegistryUpdateApiVersionPathParams, _super);
    function RegistryUpdateApiVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryUpdateApiVersionPathParams.prototype, "api", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryUpdateApiVersionPathParams.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], RegistryUpdateApiVersionPathParams.prototype, "version", void 0);
    return RegistryUpdateApiVersionPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistryUpdateApiVersionPathParams = RegistryUpdateApiVersionPathParams;
var RegistryUpdateApiVersionQueryParams = /** @class */ (function (_super) {
    __extends(RegistryUpdateApiVersionQueryParams, _super);
    function RegistryUpdateApiVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=update_mask" }),
        __metadata("design:type", String)
    ], RegistryUpdateApiVersionQueryParams.prototype, "updateMask", void 0);
    return RegistryUpdateApiVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.RegistryUpdateApiVersionQueryParams = RegistryUpdateApiVersionQueryParams;
var RegistryUpdateApiVersionRequest = /** @class */ (function (_super) {
    __extends(RegistryUpdateApiVersionRequest, _super);
    function RegistryUpdateApiVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryUpdateApiVersionPathParams)
    ], RegistryUpdateApiVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryUpdateApiVersionQueryParams)
    ], RegistryUpdateApiVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RegistryUpdateApiVersionRequest.prototype, "request", void 0);
    return RegistryUpdateApiVersionRequest;
}(utils_1.SpeakeasyBase));
exports.RegistryUpdateApiVersionRequest = RegistryUpdateApiVersionRequest;
var RegistryUpdateApiVersionResponse = /** @class */ (function (_super) {
    __extends(RegistryUpdateApiVersionResponse, _super);
    function RegistryUpdateApiVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RegistryUpdateApiVersionResponse.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistryUpdateApiVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistryUpdateApiVersionResponse.prototype, "statusCode", void 0);
    return RegistryUpdateApiVersionResponse;
}(utils_1.SpeakeasyBase));
exports.RegistryUpdateApiVersionResponse = RegistryUpdateApiVersionResponse;
