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
exports.RegistryGetArtifactContentsResponse = exports.RegistryGetArtifactContentsRequest = exports.RegistryGetArtifactContentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistryGetArtifactContentsPathParams = /** @class */ (function (_super) {
    __extends(RegistryGetArtifactContentsPathParams, _super);
    function RegistryGetArtifactContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=artifact" }),
        __metadata("design:type", String)
    ], RegistryGetArtifactContentsPathParams.prototype, "artifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RegistryGetArtifactContentsPathParams.prototype, "project", void 0);
    return RegistryGetArtifactContentsPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistryGetArtifactContentsPathParams = RegistryGetArtifactContentsPathParams;
var RegistryGetArtifactContentsRequest = /** @class */ (function (_super) {
    __extends(RegistryGetArtifactContentsRequest, _super);
    function RegistryGetArtifactContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistryGetArtifactContentsPathParams)
    ], RegistryGetArtifactContentsRequest.prototype, "pathParams", void 0);
    return RegistryGetArtifactContentsRequest;
}(utils_1.SpeakeasyBase));
exports.RegistryGetArtifactContentsRequest = RegistryGetArtifactContentsRequest;
var RegistryGetArtifactContentsResponse = /** @class */ (function (_super) {
    __extends(RegistryGetArtifactContentsResponse, _super);
    function RegistryGetArtifactContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistryGetArtifactContentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistryGetArtifactContentsResponse.prototype, "statusCode", void 0);
    return RegistryGetArtifactContentsResponse;
}(utils_1.SpeakeasyBase));
exports.RegistryGetArtifactContentsResponse = RegistryGetArtifactContentsResponse;
