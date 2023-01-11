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
exports.ShareAttributes = exports.ShareAttributesTypeEnum = exports.ShareAttributesTrackingStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accessmode_1 = require("./accessmode");
var sharemessage_1 = require("./sharemessage");
var sharerecipient_1 = require("./sharerecipient");
var ShareAttributesTrackingStatusEnum;
(function (ShareAttributesTrackingStatusEnum) {
    ShareAttributesTrackingStatusEnum["Complete"] = "complete";
    ShareAttributesTrackingStatusEnum["Incomplete"] = "incomplete";
    ShareAttributesTrackingStatusEnum["Pending"] = "pending";
})(ShareAttributesTrackingStatusEnum = exports.ShareAttributesTrackingStatusEnum || (exports.ShareAttributesTrackingStatusEnum = {}));
var ShareAttributesTypeEnum;
(function (ShareAttributesTypeEnum) {
    ShareAttributesTypeEnum["SharedFolder"] = "shared_folder";
    ShareAttributesTypeEnum["Send"] = "send";
    ShareAttributesTypeEnum["Receive"] = "receive";
})(ShareAttributesTypeEnum = exports.ShareAttributesTypeEnum || (exports.ShareAttributesTypeEnum = {}));
// ShareAttributes
/**
 * Attributes of the share including the name, path and share recipients.
**/
var ShareAttributes = /** @class */ (function (_super) {
    __extends(ShareAttributes, _super);
    function ShareAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessDescription" }),
        __metadata("design:type", String)
    ], ShareAttributes.prototype, "accessDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessMode" }),
        __metadata("design:type", accessmode_1.AccessMode)
    ], ShareAttributes.prototype, "accessMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], ShareAttributes.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], ShareAttributes.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiration" }),
        __metadata("design:type", String)
    ], ShareAttributes.prototype, "expiration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], ShareAttributes.prototype, "expired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileDropCreateFolders" }),
        __metadata("design:type", Boolean)
    ], ShareAttributes.prototype, "fileDropCreateFolders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formId" }),
        __metadata("design:type", Number)
    ], ShareAttributes.prototype, "formId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hasNotification" }),
        __metadata("design:type", Boolean)
    ], ShareAttributes.prototype, "hasNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hasPassword" }),
        __metadata("design:type", Boolean)
    ], ShareAttributes.prototype, "hasPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], ShareAttributes.prototype, "hash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inherited" }),
        __metadata("design:type", Boolean)
    ], ShareAttributes.prototype, "inherited", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: sharemessage_1.ShareMessage }),
        __metadata("design:type", Array)
    ], ShareAttributes.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Date)
    ], ShareAttributes.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ShareAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerHash" }),
        __metadata("design:type", String)
    ], ShareAttributes.prototype, "ownerHash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paths" }),
        __metadata("design:type", Array)
    ], ShareAttributes.prototype, "paths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ShareAttributes.prototype, "public", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipients", elemType: sharerecipient_1.ShareRecipient }),
        __metadata("design:type", Array)
    ], ShareAttributes.prototype, "recipients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requireEmail" }),
        __metadata("design:type", Boolean)
    ], ShareAttributes.prototype, "requireEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resent" }),
        __metadata("design:type", Date)
    ], ShareAttributes.prototype, "resent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], ShareAttributes.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackingStatus" }),
        __metadata("design:type", String)
    ], ShareAttributes.prototype, "trackingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ShareAttributes.prototype, "type", void 0);
    return ShareAttributes;
}(utils_1.SpeakeasyBase));
exports.ShareAttributes = ShareAttributes;
