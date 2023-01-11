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
exports.DefaultCacheBehavior = void 0;
var utils_1 = require("../../../internal/utils");
var allowedmethods_1 = require("./allowedmethods");
var forwardedvalues_1 = require("./forwardedvalues");
var lambdafunctionassociations_1 = require("./lambdafunctionassociations");
var trustedsigners_1 = require("./trustedsigners");
var viewerprotocolpolicyenum_1 = require("./viewerprotocolpolicyenum");
// DefaultCacheBehavior
/**
 * A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
**/
var DefaultCacheBehavior = /** @class */ (function (_super) {
    __extends(DefaultCacheBehavior, _super);
    function DefaultCacheBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", allowedmethods_1.AllowedMethods)
    ], DefaultCacheBehavior.prototype, "allowedMethods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DefaultCacheBehavior.prototype, "compress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DefaultCacheBehavior.prototype, "defaultTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", forwardedvalues_1.ForwardedValues)
    ], DefaultCacheBehavior.prototype, "forwardedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", lambdafunctionassociations_1.LambdaFunctionAssociations)
    ], DefaultCacheBehavior.prototype, "lambdaFunctionAssociations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DefaultCacheBehavior.prototype, "maxTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DefaultCacheBehavior.prototype, "minTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DefaultCacheBehavior.prototype, "smoothStreaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DefaultCacheBehavior.prototype, "targetOriginId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", trustedsigners_1.TrustedSigners)
    ], DefaultCacheBehavior.prototype, "trustedSigners", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DefaultCacheBehavior.prototype, "viewerProtocolPolicy", void 0);
    return DefaultCacheBehavior;
}(utils_1.SpeakeasyBase));
exports.DefaultCacheBehavior = DefaultCacheBehavior;
