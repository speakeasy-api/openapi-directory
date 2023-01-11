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
exports.StreamingDistributionConfig = void 0;
var utils_1 = require("../../../internal/utils");
var aliases_1 = require("./aliases");
var streamingloggingconfig_1 = require("./streamingloggingconfig");
var priceclassenum_1 = require("./priceclassenum");
var s3origin_1 = require("./s3origin");
var trustedsigners_1 = require("./trustedsigners");
// StreamingDistributionConfig
/**
 * The RTMP distribution's configuration information.
**/
var StreamingDistributionConfig = /** @class */ (function (_super) {
    __extends(StreamingDistributionConfig, _super);
    function StreamingDistributionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", aliases_1.Aliases)
    ], StreamingDistributionConfig.prototype, "aliases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StreamingDistributionConfig.prototype, "callerReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StreamingDistributionConfig.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], StreamingDistributionConfig.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", streamingloggingconfig_1.StreamingLoggingConfig)
    ], StreamingDistributionConfig.prototype, "logging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StreamingDistributionConfig.prototype, "priceClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", s3origin_1.S3Origin)
    ], StreamingDistributionConfig.prototype, "s3Origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", trustedsigners_1.TrustedSigners)
    ], StreamingDistributionConfig.prototype, "trustedSigners", void 0);
    return StreamingDistributionConfig;
}(utils_1.SpeakeasyBase));
exports.StreamingDistributionConfig = StreamingDistributionConfig;
