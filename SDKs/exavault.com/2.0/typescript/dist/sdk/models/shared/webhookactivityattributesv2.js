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
exports.WebhookActivityAttributesV2 = exports.WebhookActivityAttributesV2EventEnum = exports.WebhookActivityAttributesV2WebhookV2Details = exports.WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData = exports.WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare = exports.WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources = void 0;
var utils_1 = require("../../../internal/utils");
var accessmode_1 = require("./accessmode");
var sharemessage_1 = require("./sharemessage");
var sharerecipient_1 = require("./sharerecipient");
var WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources = /** @class */ (function (_super) {
    __extends(WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources, _super);
    function WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessedAt" }),
        __metadata("design:type", Date)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "accessedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileCount" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "fileCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "hash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previewable" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "previewable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uploadDate" }),
        __metadata("design:type", Date)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources.prototype, "uploadDate", void 0);
    return WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources;
}(utils_1.SpeakeasyBase));
exports.WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources = WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources;
var WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare = /** @class */ (function (_super) {
    __extends(WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare, _super);
    function WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessDescription" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "accessDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessMode" }),
        __metadata("design:type", accessmode_1.AccessMode)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "accessMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", Array)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiration" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "expiration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "expired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileDropCreateFolders" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "fileDropCreateFolders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formId" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "formId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hasNotification" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "hasNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hasPassword" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "hasPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "hash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inherited" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "inherited", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPublic" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "isPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: sharemessage_1.ShareMessage }),
        __metadata("design:type", Array)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Date)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerHash" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "ownerHash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paths" }),
        __metadata("design:type", Array)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "paths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipients", elemType: sharerecipient_1.ShareRecipient }),
        __metadata("design:type", Array)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "recipients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requireEmail" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "requireEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resent" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "resent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackingStatus" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "trackingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare.prototype, "type", void 0);
    return WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare;
}(utils_1.SpeakeasyBase));
exports.WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare = WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare;
var WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData = /** @class */ (function (_super) {
    __extends(WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData, _super);
    function WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formDetails" }),
        __metadata("design:type", Array)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData.prototype, "formDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources }),
        __metadata("design:type", Array)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share", elemType: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare }),
        __metadata("design:type", Array)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData.prototype, "share", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transferStatus" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData.prototype, "transferStatus", void 0);
    return WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData;
}(utils_1.SpeakeasyBase));
exports.WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData = WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData;
var WebhookActivityAttributesV2WebhookV2Details = /** @class */ (function (_super) {
    __extends(WebhookActivityAttributesV2WebhookV2Details, _super);
    function WebhookActivityAttributesV2WebhookV2Details() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2Details.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attemptId" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2Details.prototype, "attemptId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2Details.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventData" }),
        __metadata("design:type", WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData)
    ], WebhookActivityAttributesV2WebhookV2Details.prototype, "eventData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTimestamp" }),
        __metadata("design:type", Date)
    ], WebhookActivityAttributesV2WebhookV2Details.prototype, "eventTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2Details.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2Details.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2WebhookV2Details.prototype, "username", void 0);
    return WebhookActivityAttributesV2WebhookV2Details;
}(utils_1.SpeakeasyBase));
exports.WebhookActivityAttributesV2WebhookV2Details = WebhookActivityAttributesV2WebhookV2Details;
var WebhookActivityAttributesV2EventEnum;
(function (WebhookActivityAttributesV2EventEnum) {
    WebhookActivityAttributesV2EventEnum["ResourcesUpload"] = "resources.upload";
    WebhookActivityAttributesV2EventEnum["ResourcesDownload"] = "resources.download";
    WebhookActivityAttributesV2EventEnum["ResourcesDelete"] = "resources.delete";
    WebhookActivityAttributesV2EventEnum["ResourcesRename"] = "resources.rename";
    WebhookActivityAttributesV2EventEnum["ResourcesCopy"] = "resources.copy";
    WebhookActivityAttributesV2EventEnum["ResourcesMove"] = "resources.move";
    WebhookActivityAttributesV2EventEnum["ResourcesCompress"] = "resources.compress";
    WebhookActivityAttributesV2EventEnum["ResourcesExtract"] = "resources.extract";
    WebhookActivityAttributesV2EventEnum["ResourcesCreateFolder"] = "resources.createFolder";
    WebhookActivityAttributesV2EventEnum["SharesFormSubmit"] = "shares.formSubmit";
})(WebhookActivityAttributesV2EventEnum = exports.WebhookActivityAttributesV2EventEnum || (exports.WebhookActivityAttributesV2EventEnum = {}));
var WebhookActivityAttributesV2 = /** @class */ (function (_super) {
    __extends(WebhookActivityAttributesV2, _super);
    function WebhookActivityAttributesV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attemptId" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "attemptId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", WebhookActivityAttributesV2WebhookV2Details)
    ], WebhookActivityAttributesV2.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointUrl" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "endpointUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resend" }),
        __metadata("design:type", Boolean)
    ], WebhookActivityAttributesV2.prototype, "resend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourcePath" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "resourcePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "response", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV2.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "username", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhookFormat" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "webhookFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhookId" }),
        __metadata("design:type", Number)
    ], WebhookActivityAttributesV2.prototype, "webhookId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhookPath" }),
        __metadata("design:type", String)
    ], WebhookActivityAttributesV2.prototype, "webhookPath", void 0);
    return WebhookActivityAttributesV2;
}(utils_1.SpeakeasyBase));
exports.WebhookActivityAttributesV2 = WebhookActivityAttributesV2;
