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
exports.InputFileFetchConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var compressionformatstrategyenum_1 = require("./compressionformatstrategyenum");
var credential_1 = require("./credential");
var downloadcatalogstrategyenum_1 = require("./downloadcatalogstrategyenum");
// InputFileFetchConfiguration
/**
 * Describe the way to download the file
**/
var InputFileFetchConfiguration = /** @class */ (function (_super) {
    __extends(InputFileFetchConfiguration, _super);
    function InputFileFetchConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compressedRelativePath" }),
        __metadata("design:type", String)
    ], InputFileFetchConfiguration.prototype, "compressedRelativePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compressionFormatStrategy" }),
        __metadata("design:type", String)
    ], InputFileFetchConfiguration.prototype, "compressionFormatStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credential" }),
        __metadata("design:type", credential_1.Credential)
    ], InputFileFetchConfiguration.prototype, "credential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downloadCatalogStrategy" }),
        __metadata("design:type", String)
    ], InputFileFetchConfiguration.prototype, "downloadCatalogStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downloadTimeout" }),
        __metadata("design:type", Number)
    ], InputFileFetchConfiguration.prototype, "downloadTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], InputFileFetchConfiguration.prototype, "uri", void 0);
    return InputFileFetchConfiguration;
}(utils_1.SpeakeasyBase));
exports.InputFileFetchConfiguration = InputFileFetchConfiguration;
