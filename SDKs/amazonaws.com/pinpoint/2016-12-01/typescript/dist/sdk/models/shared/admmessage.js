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
exports.AdmMessage = void 0;
var utils_1 = require("../../../internal/utils");
var actionenum_1 = require("./actionenum");
// AdmMessage
/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.
**/
var AdmMessage = /** @class */ (function (_super) {
    __extends(AdmMessage, _super);
    function AdmMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConsolidationKey" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "consolidationKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Data" }),
        __metadata("design:type", Object)
    ], AdmMessage.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExpiresAfter" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "expiresAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IconReference" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "iconReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ImageIconUrl" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "imageIconUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ImageUrl" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "imageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MD5" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "md5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RawContent" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "rawContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SilentPush" }),
        __metadata("design:type", Boolean)
    ], AdmMessage.prototype, "silentPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmallImageIconUrl" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "smallImageIconUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Sound" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "sound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Substitutions" }),
        __metadata("design:type", Object)
    ], AdmMessage.prototype, "substitutions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Url" }),
        __metadata("design:type", String)
    ], AdmMessage.prototype, "url", void 0);
    return AdmMessage;
}(utils_1.SpeakeasyBase));
exports.AdmMessage = AdmMessage;
