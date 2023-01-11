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
exports.Action = void 0;
var utils_1 = require("../../../internal/utils");
var cleartimeraction_1 = require("./cleartimeraction");
var dynamodbaction_1 = require("./dynamodbaction");
var dynamodbv2action_1 = require("./dynamodbv2action");
var firehoseaction_1 = require("./firehoseaction");
var ioteventsaction_1 = require("./ioteventsaction");
var iotsitewiseaction_1 = require("./iotsitewiseaction");
var iottopicpublishaction_1 = require("./iottopicpublishaction");
var lambdaaction_1 = require("./lambdaaction");
var resettimeraction_1 = require("./resettimeraction");
var settimeraction_1 = require("./settimeraction");
var setvariableaction_1 = require("./setvariableaction");
var snstopicpublishaction_1 = require("./snstopicpublishaction");
var sqsaction_1 = require("./sqsaction");
// Action
/**
 * An action to be performed when the <code>condition</code> is TRUE.
**/
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clearTimer" }),
        __metadata("design:type", cleartimeraction_1.ClearTimerAction)
    ], Action.prototype, "clearTimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dynamoDB" }),
        __metadata("design:type", dynamodbaction_1.DynamoDbAction)
    ], Action.prototype, "dynamoDB", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dynamoDBv2" }),
        __metadata("design:type", dynamodbv2action_1.DynamoDBv2Action)
    ], Action.prototype, "dynamoDBv2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firehose" }),
        __metadata("design:type", firehoseaction_1.FirehoseAction)
    ], Action.prototype, "firehose", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iotEvents" }),
        __metadata("design:type", ioteventsaction_1.IotEventsAction)
    ], Action.prototype, "iotEvents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iotSiteWise" }),
        __metadata("design:type", iotsitewiseaction_1.IotSiteWiseAction)
    ], Action.prototype, "iotSiteWise", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iotTopicPublish" }),
        __metadata("design:type", iottopicpublishaction_1.IotTopicPublishAction)
    ], Action.prototype, "iotTopicPublish", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lambda" }),
        __metadata("design:type", lambdaaction_1.LambdaAction)
    ], Action.prototype, "lambda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resetTimer" }),
        __metadata("design:type", resettimeraction_1.ResetTimerAction)
    ], Action.prototype, "resetTimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setTimer" }),
        __metadata("design:type", settimeraction_1.SetTimerAction)
    ], Action.prototype, "setTimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setVariable" }),
        __metadata("design:type", setvariableaction_1.SetVariableAction)
    ], Action.prototype, "setVariable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sns" }),
        __metadata("design:type", snstopicpublishaction_1.SnsTopicPublishAction)
    ], Action.prototype, "sns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sqs" }),
        __metadata("design:type", sqsaction_1.SqsAction)
    ], Action.prototype, "sqs", void 0);
    return Action;
}(utils_1.SpeakeasyBase));
exports.Action = Action;
