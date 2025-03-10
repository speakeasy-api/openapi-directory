"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.SourceConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var authenticationconfiguration_1 = require("./authenticationconfiguration");
var coderepository_1 = require("./coderepository");
var imagerepository_1 = require("./imagerepository");
var class_transformer_1 = require("class-transformer");
/**
 * Describes the source deployed to an App Runner service. It can be a code or an image repository.
 */
var SourceConfiguration = /** @class */ (function (_super) {
    __extends(SourceConfiguration, _super);
    function SourceConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AuthenticationConfiguration" }),
        (0, class_transformer_1.Type)(function () { return authenticationconfiguration_1.AuthenticationConfiguration; }),
        __metadata("design:type", authenticationconfiguration_1.AuthenticationConfiguration)
    ], SourceConfiguration.prototype, "authenticationConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AutoDeploymentsEnabled" }),
        __metadata("design:type", Boolean)
    ], SourceConfiguration.prototype, "autoDeploymentsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CodeRepository" }),
        (0, class_transformer_1.Type)(function () { return coderepository_1.CodeRepository; }),
        __metadata("design:type", coderepository_1.CodeRepository)
    ], SourceConfiguration.prototype, "codeRepository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ImageRepository" }),
        (0, class_transformer_1.Type)(function () { return imagerepository_1.ImageRepository; }),
        __metadata("design:type", imagerepository_1.ImageRepository)
    ], SourceConfiguration.prototype, "imageRepository", void 0);
    return SourceConfiguration;
}(utils_1.SpeakeasyBase));
exports.SourceConfiguration = SourceConfiguration;
