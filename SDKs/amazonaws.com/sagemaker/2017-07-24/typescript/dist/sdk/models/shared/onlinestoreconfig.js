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
exports.OnlineStoreConfig = void 0;
var utils_1 = require("../../../internal/utils");
var onlinestoresecurityconfig_1 = require("./onlinestoresecurityconfig");
var class_transformer_1 = require("class-transformer");
/**
 * Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or <code>KMSKeyId</code>, for at rest data encryption. You can turn <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag at General Assembly; the default value is <code>False</code>.
 */
var OnlineStoreConfig = /** @class */ (function (_super) {
    __extends(OnlineStoreConfig, _super);
    function OnlineStoreConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "EnableOnlineStore" }),
        __metadata("design:type", Boolean)
    ], OnlineStoreConfig.prototype, "enableOnlineStore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SecurityConfig" }),
        (0, class_transformer_1.Type)(function () { return onlinestoresecurityconfig_1.OnlineStoreSecurityConfig; }),
        __metadata("design:type", onlinestoresecurityconfig_1.OnlineStoreSecurityConfig)
    ], OnlineStoreConfig.prototype, "securityConfig", void 0);
    return OnlineStoreConfig;
}(utils_1.SpeakeasyBase));
exports.OnlineStoreConfig = OnlineStoreConfig;
