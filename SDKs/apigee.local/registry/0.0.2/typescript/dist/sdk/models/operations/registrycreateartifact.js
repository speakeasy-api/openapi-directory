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
exports.RegistryCreateArtifactResponse = exports.RegistryCreateArtifactRequest = exports.RegistryCreateArtifactQueryParams = exports.RegistryCreateArtifactPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistryCreateArtifactPathParams = /** @class */ (function (_super) {
    __extends(RegistryCreateArtifactPathParams, _super);
    function RegistryCreateArtifactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryCreateArtifactPathParams.prototype, "project", void 0);
    return RegistryCreateArtifactPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistryCreateArtifactPathParams = RegistryCreateArtifactPathParams;
var RegistryCreateArtifactQueryParams = /** @class */ (function (_super) {
    __extends(RegistryCreateArtifactQueryParams, _super);
    function RegistryCreateArtifactQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artifact_id" }),
        __metadata("design:type", String)
    ], RegistryCreateArtifactQueryParams.prototype, "artifactId", void 0);
    return RegistryCreateArtifactQueryParams;
}(utils_1.SpeakeasyBase));
exports.RegistryCreateArtifactQueryParams = RegistryCreateArtifactQueryParams;
var RegistryCreateArtifactRequest = /** @class */ (function (_super) {
    __extends(RegistryCreateArtifactRequest, _super);
    function RegistryCreateArtifactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryCreateArtifactPathParams)
    ], RegistryCreateArtifactRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryCreateArtifactQueryParams)
    ], RegistryCreateArtifactRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RegistryCreateArtifactRequest.prototype, "request", void 0);
    return RegistryCreateArtifactRequest;
}(utils_1.SpeakeasyBase));
exports.RegistryCreateArtifactRequest = RegistryCreateArtifactRequest;
var RegistryCreateArtifactResponse = /** @class */ (function (_super) {
    __extends(RegistryCreateArtifactResponse, _super);
    function RegistryCreateArtifactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RegistryCreateArtifactResponse.prototype, "artifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistryCreateArtifactResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistryCreateArtifactResponse.prototype, "statusCode", void 0);
    return RegistryCreateArtifactResponse;
}(utils_1.SpeakeasyBase));
exports.RegistryCreateArtifactResponse = RegistryCreateArtifactResponse;
