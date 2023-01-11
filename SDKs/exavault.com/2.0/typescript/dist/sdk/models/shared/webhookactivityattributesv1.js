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
exports.WebhookActivityAttributesV1 = exports.WebhookActivityAttributesV1EventEnum = exports.WebhookActivityAttributesV1WebhookV1Details = void 0;
var utils_1 = require("../../../internal/utils");
var WebhookActivityAttributesV1WebhookV1Details = /** @class */ (function (_super) {
    __extends(WebhookActivityAttributesV1WebhookV1Details, _super);
    function WebhookActivityAttributesV1WebhookV1Details() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1WebhookV1Details.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attempt" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV1WebhookV1Details.prototype, "attempt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attemptId" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1WebhookV1Details.prototype, "attemptId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1WebhookV1Details.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1WebhookV1Details.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1WebhookV1Details.prototype, "username", void 0);
    return WebhookActivityAttributesV1WebhookV1Details;
}(utils_1.SpeakeasyBase));
exports.WebhookActivityAttributesV1WebhookV1Details = WebhookActivityAttributesV1WebhookV1Details;
var WebhookActivityAttributesV1EventEnum;
(function (WebhookActivityAttributesV1EventEnum) {
    WebhookActivityAttributesV1EventEnum["ResourcesUpload"] = "resources.upload";
    WebhookActivityAttributesV1EventEnum["ResourcesDownload"] = "resources.download";
    WebhookActivityAttributesV1EventEnum["ResourcesDelete"] = "resources.delete";
    WebhookActivityAttributesV1EventEnum["ResourcesRename"] = "resources.rename";
    WebhookActivityAttributesV1EventEnum["ResourcesCopy"] = "resources.copy";
    WebhookActivityAttributesV1EventEnum["ResourcesMove"] = "resources.move";
    WebhookActivityAttributesV1EventEnum["ResourcesCompress"] = "resources.compress";
    WebhookActivityAttributesV1EventEnum["ResourcesExtract"] = "resources.extract";
    WebhookActivityAttributesV1EventEnum["ResourcesCreateFolder"] = "resources.createFolder";
    WebhookActivityAttributesV1EventEnum["SharesFormSubmit"] = "shares.formSubmit";
})(WebhookActivityAttributesV1EventEnum = exports.WebhookActivityAttributesV1EventEnum || (exports.WebhookActivityAttributesV1EventEnum = {}));
var WebhookActivityAttributesV1 = /** @class */ (function (_super) {
    __extends(WebhookActivityAttributesV1, _super);
    function WebhookActivityAttributesV1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attemptId" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "attemptId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", WebhookActivityAttributesV1WebhookV1Details)
    ], WebhookActivityAttributesV1.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointUrl" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "endpointUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resend" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV1.prototype, "resend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourcePath" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "resourcePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "response", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV1.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "username", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhookFormat" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "webhookFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhookId" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV1.prototype, "webhookId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhookPath" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV1.prototype, "webhookPath", void 0);
    return WebhookActivityAttributesV1;
}(utils_1.SpeakeasyBase));
exports.WebhookActivityAttributesV1 = WebhookActivityAttributesV1;
