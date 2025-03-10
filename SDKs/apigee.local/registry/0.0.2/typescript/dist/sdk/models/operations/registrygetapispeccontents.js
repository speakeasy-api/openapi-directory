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
exports.RegistryGetApiSpecContentsResponse = exports.RegistryGetApiSpecContentsRequest = exports.RegistryGetApiSpecContentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistryGetApiSpecContentsPathParams = /** @class */ (function (_super) {
    __extends(RegistryGetApiSpecContentsPathParams, _super);
    function RegistryGetApiSpecContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], RegistryGetApiSpecContentsPathParams.prototype, "api", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryGetApiSpecContentsPathParams.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=spec" }),
        __metadata("design:type", String)
    ], RegistryGetApiSpecContentsPathParams.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], RegistryGetApiSpecContentsPathParams.prototype, "version", void 0);
    return RegistryGetApiSpecContentsPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistryGetApiSpecContentsPathParams = RegistryGetApiSpecContentsPathParams;
var RegistryGetApiSpecContentsRequest = /** @class */ (function (_super) {
    __extends(RegistryGetApiSpecContentsRequest, _super);
    function RegistryGetApiSpecContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryGetApiSpecContentsPathParams)
    ], RegistryGetApiSpecContentsRequest.prototype, "pathParams", void 0);
    return RegistryGetApiSpecContentsRequest;
}(utils_1.SpeakeasyBase));
exports.RegistryGetApiSpecContentsRequest = RegistryGetApiSpecContentsRequest;
var RegistryGetApiSpecContentsResponse = /** @class */ (function (_super) {
    __extends(RegistryGetApiSpecContentsResponse, _super);
    function RegistryGetApiSpecContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistryGetApiSpecContentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistryGetApiSpecContentsResponse.prototype, "statusCode", void 0);
    return RegistryGetApiSpecContentsResponse;
}(utils_1.SpeakeasyBase));
exports.RegistryGetApiSpecContentsResponse = RegistryGetApiSpecContentsResponse;
