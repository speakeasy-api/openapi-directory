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
exports.DescribeBotLocaleResponse = void 0;
var utils_1 = require("../../../internal/utils");
var botlocalehistoryevent_1 = require("./botlocalehistoryevent");
var botlocalestatusenum_1 = require("./botlocalestatusenum");
var voicesettings_1 = require("./voicesettings");
var DescribeBotLocaleResponse = /** @class */ (function (_super) {
    __extends(DescribeBotLocaleResponse, _super);
    function DescribeBotLocaleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botId" }),
        __metadata("design:type", String)
    ], DescribeBotLocaleResponse.prototype, "botId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botLocaleHistoryEvents", elemType: botlocalehistoryevent_1.BotLocaleHistoryEvent }),
        __metadata("design:type", Array)
    ], DescribeBotLocaleResponse.prototype, "botLocaleHistoryEvents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botLocaleStatus" }),
        __metadata("design:type", String)
    ], DescribeBotLocaleResponse.prototype, "botLocaleStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], DescribeBotLocaleResponse.prototype, "botVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], DescribeBotLocaleResponse.prototype, "creationDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DescribeBotLocaleResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureReasons" }),
        __metadata("design:type", Array)
    ], DescribeBotLocaleResponse.prototype, "failureReasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intentsCount" }),
        __metadata("design:type", Number)
    ], DescribeBotLocaleResponse.prototype, "intentsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastBuildSubmittedDateTime" }),
        __metadata("design:type", Date)
    ], DescribeBotLocaleResponse.prototype, "lastBuildSubmittedDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], DescribeBotLocaleResponse.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=localeId" }),
        __metadata("design:type", String)
    ], DescribeBotLocaleResponse.prototype, "localeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=localeName" }),
        __metadata("design:type", String)
    ], DescribeBotLocaleResponse.prototype, "localeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nluIntentConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], DescribeBotLocaleResponse.prototype, "nluIntentConfidenceThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slotTypesCount" }),
        __metadata("design:type", Number)
    ], DescribeBotLocaleResponse.prototype, "slotTypesCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voiceSettings" }),
        __metadata("design:type", voicesettings_1.VoiceSettings)
    ], DescribeBotLocaleResponse.prototype, "voiceSettings", void 0);
    return DescribeBotLocaleResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeBotLocaleResponse = DescribeBotLocaleResponse;
