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
exports.SubscriptionIndex = void 0;
var utils_1 = require("../../../internal/utils");
var consumptionavailabilitystatusenum_1 = require("./consumptionavailabilitystatusenum");
var errorresponsemessage_1 = require("./errorresponsemessage");
var subscriptionlinks_1 = require("./subscriptionlinks");
var subscriptionstatusenum_1 = require("./subscriptionstatusenum");
// SubscriptionIndex
/**
 * The subscription definition
**/
var SubscriptionIndex = /** @class */ (function (_super) {
    __extends(SubscriptionIndex, _super);
    function SubscriptionIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consumerHealthStatus" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "consumerHealthStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consumerLastRequestSentUri" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "consumerLastRequestSentUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consumerUnvailableSinceUtcDate" }),
        __metadata("design:type", Date)
    ], SubscriptionIndex.prototype, "consumerUnvailableSinceUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastErrorMessage" }),
        __metadata("design:type", errorresponsemessage_1.ErrorResponseMessage)
    ], SubscriptionIndex.prototype, "lastErrorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastOrderPushedModificationUtcDate" }),
        __metadata("design:type", Date)
    ], SubscriptionIndex.prototype, "lastOrderPushedModificationUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastRetryUtcDate" }),
        __metadata("design:type", Date)
    ], SubscriptionIndex.prototype, "lastRetryUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastSuccessfulOrderPushedUtcDate" }),
        __metadata("design:type", Date)
    ], SubscriptionIndex.prototype, "lastSuccessfulOrderPushedUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", subscriptionlinks_1.SubscriptionLinks)
    ], SubscriptionIndex.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxRetryCount" }),
        __metadata("design:type", Number)
    ], SubscriptionIndex.prototype, "maxRetryCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantApplicationName" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "merchantApplicationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantApplicationVersion" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "merchantApplicationVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantEmailAlert" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "merchantEmailAlert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextScheduledRetryUtcDate" }),
        __metadata("design:type", Date)
    ], SubscriptionIndex.prototype, "nextScheduledRetryUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recoverBeginPeriodOrderLastModificationUtcDate" }),
        __metadata("design:type", Date)
    ], SubscriptionIndex.prototype, "recoverBeginPeriodOrderLastModificationUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recoverEndPeriodOrderLastModificationUtcDate" }),
        __metadata("design:type", Date)
    ], SubscriptionIndex.prototype, "recoverEndPeriodOrderLastModificationUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retryCount" }),
        __metadata("design:type", Number)
    ], SubscriptionIndex.prototype, "retryCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetUrl" }),
        __metadata("design:type", String)
    ], SubscriptionIndex.prototype, "targetUrl", void 0);
    return SubscriptionIndex;
}(utils_1.SpeakeasyBase));
exports.SubscriptionIndex = SubscriptionIndex;
