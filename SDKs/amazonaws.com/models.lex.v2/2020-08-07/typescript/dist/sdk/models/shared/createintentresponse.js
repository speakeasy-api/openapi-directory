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
exports.CreateIntentResponse = void 0;
var utils_1 = require("../../../internal/utils");
var dialogcodehooksettings_1 = require("./dialogcodehooksettings");
var fulfillmentcodehooksettings_1 = require("./fulfillmentcodehooksettings");
var inputcontext_1 = require("./inputcontext");
var intentclosingsetting_1 = require("./intentclosingsetting");
var intentconfirmationsetting_1 = require("./intentconfirmationsetting");
var kendraconfiguration_1 = require("./kendraconfiguration");
var outputcontext_1 = require("./outputcontext");
var sampleutterance_1 = require("./sampleutterance");
var CreateIntentResponse = /** @class */ (function (_super) {
    __extends(CreateIntentResponse, _super);
    function CreateIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botId" }),
        __metadata("design:type", String)
    ], CreateIntentResponse.prototype, "botId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], CreateIntentResponse.prototype, "botVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], CreateIntentResponse.prototype, "creationDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateIntentResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dialogCodeHook" }),
        __metadata("design:type", dialogcodehooksettings_1.DialogCodeHookSettings)
    ], CreateIntentResponse.prototype, "dialogCodeHook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fulfillmentCodeHook" }),
        __metadata("design:type", fulfillmentcodehooksettings_1.FulfillmentCodeHookSettings)
    ], CreateIntentResponse.prototype, "fulfillmentCodeHook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inputContexts", elemType: inputcontext_1.InputContext }),
        __metadata("design:type", Array)
    ], CreateIntentResponse.prototype, "inputContexts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intentClosingSetting" }),
        __metadata("design:type", intentclosingsetting_1.IntentClosingSetting)
    ], CreateIntentResponse.prototype, "intentClosingSetting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intentConfirmationSetting" }),
        __metadata("design:type", intentconfirmationsetting_1.IntentConfirmationSetting)
    ], CreateIntentResponse.prototype, "intentConfirmationSetting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intentId" }),
        __metadata("design:type", String)
    ], CreateIntentResponse.prototype, "intentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intentName" }),
        __metadata("design:type", String)
    ], CreateIntentResponse.prototype, "intentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kendraConfiguration" }),
        __metadata("design:type", kendraconfiguration_1.KendraConfiguration)
    ], CreateIntentResponse.prototype, "kendraConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=localeId" }),
        __metadata("design:type", String)
    ], CreateIntentResponse.prototype, "localeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outputContexts", elemType: outputcontext_1.OutputContext }),
        __metadata("design:type", Array)
    ], CreateIntentResponse.prototype, "outputContexts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentIntentSignature" }),
        __metadata("design:type", String)
    ], CreateIntentResponse.prototype, "parentIntentSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sampleUtterances", elemType: sampleutterance_1.SampleUtterance }),
        __metadata("design:type", Array)
    ], CreateIntentResponse.prototype, "sampleUtterances", void 0);
    return CreateIntentResponse;
}(utils_1.SpeakeasyBase));
exports.CreateIntentResponse = CreateIntentResponse;
