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
exports.DirectMessageConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var admmessage_1 = require("./admmessage");
var apnsmessage_1 = require("./apnsmessage");
var baidumessage_1 = require("./baidumessage");
var defaultmessage_1 = require("./defaultmessage");
var defaultpushnotificationmessage_1 = require("./defaultpushnotificationmessage");
var emailmessage_1 = require("./emailmessage");
var gcmmessage_1 = require("./gcmmessage");
var smsmessage_1 = require("./smsmessage");
var voicemessage_1 = require("./voicemessage");
// DirectMessageConfiguration
/**
 * Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
**/
var DirectMessageConfiguration = /** @class */ (function (_super) {
    __extends(DirectMessageConfiguration, _super);
    function DirectMessageConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ADMMessage" }),
        __metadata("design:type", admmessage_1.AdmMessage)
    ], DirectMessageConfiguration.prototype, "admMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=APNSMessage" }),
        __metadata("design:type", apnsmessage_1.ApnsMessage)
    ], DirectMessageConfiguration.prototype, "apnsMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BaiduMessage" }),
        __metadata("design:type", baidumessage_1.BaiduMessage)
    ], DirectMessageConfiguration.prototype, "baiduMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultMessage" }),
        __metadata("design:type", defaultmessage_1.DefaultMessage)
    ], DirectMessageConfiguration.prototype, "defaultMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultPushNotificationMessage" }),
        __metadata("design:type", defaultpushnotificationmessage_1.DefaultPushNotificationMessage)
    ], DirectMessageConfiguration.prototype, "defaultPushNotificationMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailMessage" }),
        __metadata("design:type", emailmessage_1.EmailMessage)
    ], DirectMessageConfiguration.prototype, "emailMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GCMMessage" }),
        __metadata("design:type", gcmmessage_1.GcmMessage)
    ], DirectMessageConfiguration.prototype, "gcmMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SMSMessage" }),
        __metadata("design:type", smsmessage_1.SmsMessage)
    ], DirectMessageConfiguration.prototype, "smsMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=VoiceMessage" }),
        __metadata("design:type", voicemessage_1.VoiceMessage)
    ], DirectMessageConfiguration.prototype, "voiceMessage", void 0);
    return DirectMessageConfiguration;
}(utils_1.SpeakeasyBase));
exports.DirectMessageConfiguration = DirectMessageConfiguration;
