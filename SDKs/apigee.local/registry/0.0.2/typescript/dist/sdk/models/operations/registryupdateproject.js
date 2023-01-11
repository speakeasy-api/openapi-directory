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
exports.RegistryUpdateProjectResponse = exports.RegistryUpdateProjectRequest = exports.RegistryUpdateProjectQueryParams = exports.RegistryUpdateProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistryUpdateProjectPathParams = /** @class */ (function (_super) {
    __extends(RegistryUpdateProjectPathParams, _super);
    function RegistryUpdateProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryUpdateProjectPathParams.prototype, "project", void 0);
    return RegistryUpdateProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistryUpdateProjectPathParams = RegistryUpdateProjectPathParams;
var RegistryUpdateProjectQueryParams = /** @class */ (function (_super) {
    __extends(RegistryUpdateProjectQueryParams, _super);
    function RegistryUpdateProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=update_mask" }),
        __metadata("design:type", String)
    ], RegistryUpdateProjectQueryParams.prototype, "updateMask", void 0);
    return RegistryUpdateProjectQueryParams;
}(utils_1.SpeakeasyBase));
exports.RegistryUpdateProjectQueryParams = RegistryUpdateProjectQueryParams;
var RegistryUpdateProjectRequest = /** @class */ (function (_super) {
    __extends(RegistryUpdateProjectRequest, _super);
    function RegistryUpdateProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryUpdateProjectPathParams)
    ], RegistryUpdateProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryUpdateProjectQueryParams)
    ], RegistryUpdateProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RegistryUpdateProjectRequest.prototype, "request", void 0);
    return RegistryUpdateProjectRequest;
}(utils_1.SpeakeasyBase));
exports.RegistryUpdateProjectRequest = RegistryUpdateProjectRequest;
var RegistryUpdateProjectResponse = /** @class */ (function (_super) {
    __extends(RegistryUpdateProjectResponse, _super);
    function RegistryUpdateProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistryUpdateProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RegistryUpdateProjectResponse.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistryUpdateProjectResponse.prototype, "statusCode", void 0);
    return RegistryUpdateProjectResponse;
}(utils_1.SpeakeasyBase));
exports.RegistryUpdateProjectResponse = RegistryUpdateProjectResponse;
