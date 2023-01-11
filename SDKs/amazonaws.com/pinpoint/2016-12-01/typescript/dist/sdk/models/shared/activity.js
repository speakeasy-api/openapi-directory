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
exports.Activity = void 0;
var utils_1 = require("../../../internal/utils");
var custommessageactivity_1 = require("./custommessageactivity");
var conditionalsplitactivity_1 = require("./conditionalsplitactivity");
var emailmessageactivity_1 = require("./emailmessageactivity");
var holdoutactivity_1 = require("./holdoutactivity");
var multiconditionalsplitactivity_1 = require("./multiconditionalsplitactivity");
var pushmessageactivity_1 = require("./pushmessageactivity");
var randomsplitactivity_1 = require("./randomsplitactivity");
var smsmessageactivity_1 = require("./smsmessageactivity");
var waitactivity_1 = require("./waitactivity");
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CUSTOM" }),
        __metadata("design:type", custommessageactivity_1.CustomMessageActivity)
    ], Activity.prototype, "custom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConditionalSplit" }),
        __metadata("design:type", conditionalsplitactivity_1.ConditionalSplitActivity)
    ], Activity.prototype, "conditionalSplit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Activity.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EMAIL" }),
        __metadata("design:type", emailmessageactivity_1.EmailMessageActivity)
    ], Activity.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Holdout" }),
        __metadata("design:type", holdoutactivity_1.HoldoutActivity)
    ], Activity.prototype, "holdout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MultiCondition" }),
        __metadata("design:type", multiconditionalsplitactivity_1.MultiConditionalSplitActivity)
    ], Activity.prototype, "multiCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PUSH" }),
        __metadata("design:type", pushmessageactivity_1.PushMessageActivity)
    ], Activity.prototype, "push", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RandomSplit" }),
        __metadata("design:type", randomsplitactivity_1.RandomSplitActivity)
    ], Activity.prototype, "randomSplit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SMS" }),
        __metadata("design:type", smsmessageactivity_1.SmsMessageActivity)
    ], Activity.prototype, "sms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Wait" }),
        __metadata("design:type", waitactivity_1.WaitActivity)
    ], Activity.prototype, "wait", void 0);
    return Activity;
}(utils_1.SpeakeasyBase));
exports.Activity = Activity;
