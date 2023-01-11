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
exports.NotificationAttributes = exports.NotificationAttributesTypeEnum = exports.NotificationAttributesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var notificationrecipient_1 = require("./notificationrecipient");
var NotificationAttributesActionEnum;
(function (NotificationAttributesActionEnum) {
    NotificationAttributesActionEnum["Upload"] = "upload";
    NotificationAttributesActionEnum["Download"] = "download";
    NotificationAttributesActionEnum["Delete"] = "delete";
    NotificationAttributesActionEnum["All"] = "all";
})(NotificationAttributesActionEnum = exports.NotificationAttributesActionEnum || (exports.NotificationAttributesActionEnum = {}));
var NotificationAttributesTypeEnum;
(function (NotificationAttributesTypeEnum) {
    NotificationAttributesTypeEnum["File"] = "file";
    NotificationAttributesTypeEnum["Folder"] = "folder";
    NotificationAttributesTypeEnum["SharedFolder"] = "shared_folder";
    NotificationAttributesTypeEnum["SendReceipt"] = "send_receipt";
    NotificationAttributesTypeEnum["ShareReceipt"] = "share_receipt";
    NotificationAttributesTypeEnum["FileDrop"] = "file_drop";
})(NotificationAttributesTypeEnum = exports.NotificationAttributesTypeEnum || (exports.NotificationAttributesTypeEnum = {}));
// NotificationAttributes
/**
 * Attributes for the notification including the path, recipients, and share data.
**/
var NotificationAttributes = /** @class */ (function (_super) {
    __extends(NotificationAttributes, _super);
    function NotificationAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], NotificationAttributes.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Date)
    ], NotificationAttributes.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=readableDescription" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "readableDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=readableDescriptionWithoutPath" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "readableDescriptionWithoutPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipients", elemType: notificationrecipient_1.NotificationRecipient }),
        __metadata("design:type", Array)
    ], NotificationAttributes.prototype, "recipients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sendEmail" }),
        __metadata("design:type", Boolean)
    ], NotificationAttributes.prototype, "sendEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shareId" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "shareId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], NotificationAttributes.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usernames" }),
        __metadata("design:type", Array)
    ], NotificationAttributes.prototype, "usernames", void 0);
    return NotificationAttributes;
}(utils_1.SpeakeasyBase));
exports.NotificationAttributes = NotificationAttributes;
