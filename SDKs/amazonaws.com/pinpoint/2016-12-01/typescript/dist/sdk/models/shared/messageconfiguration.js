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
exports.MessageConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var message_1 = require("./message");
var campaigncustommessage_1 = require("./campaigncustommessage");
var campaignemailmessage_1 = require("./campaignemailmessage");
var campaigninappmessage_1 = require("./campaigninappmessage");
var campaignsmsmessage_1 = require("./campaignsmsmessage");
// MessageConfiguration
/**
 * Specifies the message configuration settings for a campaign.
**/
var MessageConfiguration = /** @class */ (function (_super) {
    __extends(MessageConfiguration, _super);
    function MessageConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ADMMessage" }),
        __metadata("design:type", message_1.Message)
    ], MessageConfiguration.prototype, "admMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=APNSMessage" }),
        __metadata("design:type", message_1.Message)
    ], MessageConfiguration.prototype, "apnsMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BaiduMessage" }),
        __metadata("design:type", message_1.Message)
    ], MessageConfiguration.prototype, "baiduMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomMessage" }),
        __metadata("design:type", campaigncustommessage_1.CampaignCustomMessage)
    ], MessageConfiguration.prototype, "customMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultMessage" }),
        __metadata("design:type", message_1.Message)
    ], MessageConfiguration.prototype, "defaultMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailMessage" }),
        __metadata("design:type", campaignemailmessage_1.CampaignEmailMessage)
    ], MessageConfiguration.prototype, "emailMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GCMMessage" }),
        __metadata("design:type", message_1.Message)
    ], MessageConfiguration.prototype, "gcmMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InAppMessage" }),
        __metadata("design:type", campaigninappmessage_1.CampaignInAppMessage)
    ], MessageConfiguration.prototype, "inAppMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SMSMessage" }),
        __metadata("design:type", campaignsmsmessage_1.CampaignSmsMessage)
    ], MessageConfiguration.prototype, "smsMessage", void 0);
    return MessageConfiguration;
}(utils_1.SpeakeasyBase));
exports.MessageConfiguration = MessageConfiguration;
