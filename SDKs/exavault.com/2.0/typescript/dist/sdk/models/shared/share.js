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
exports.Share = exports.ShareTypeEnum = exports.ShareShareRelationships = exports.ShareShareRelationshipsShareRelationshipsResource = exports.ShareShareRelationshipsShareRelationshipsResourceShareResourceData = exports.ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum = exports.ShareShareRelationshipsShareRelationshipsOwner = exports.ShareShareRelationshipsShareRelationshipsOwnerData = exports.ShareShareRelationshipsShareRelationshipsNotification = exports.ShareShareRelationshipsShareRelationshipsNotificationData = exports.ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum = exports.ShareShareRelationshipsShareRelationshipsMessage = exports.ShareShareRelationshipsShareRelationshipsMessageShareMessageData = exports.ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shareattributes_1 = require("./shareattributes");
var ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum;
(function (ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum) {
    ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum["Message"] = "message";
})(ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum = exports.ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum || (exports.ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum = {}));
var ShareShareRelationshipsShareRelationshipsMessageShareMessageData = /** @class */ (function (_super) {
    __extends(ShareShareRelationshipsShareRelationshipsMessageShareMessageData, _super);
    function ShareShareRelationshipsShareRelationshipsMessageShareMessageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ShareShareRelationshipsShareRelationshipsMessageShareMessageData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ShareShareRelationshipsShareRelationshipsMessageShareMessageData.prototype, "type", void 0);
    return ShareShareRelationshipsShareRelationshipsMessageShareMessageData;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationshipsShareRelationshipsMessageShareMessageData = ShareShareRelationshipsShareRelationshipsMessageShareMessageData;
var ShareShareRelationshipsShareRelationshipsMessage = /** @class */ (function (_super) {
    __extends(ShareShareRelationshipsShareRelationshipsMessage, _super);
    function ShareShareRelationshipsShareRelationshipsMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ShareShareRelationshipsShareRelationshipsMessageShareMessageData)
    ], ShareShareRelationshipsShareRelationshipsMessage.prototype, "data", void 0);
    return ShareShareRelationshipsShareRelationshipsMessage;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationshipsShareRelationshipsMessage = ShareShareRelationshipsShareRelationshipsMessage;
var ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum;
(function (ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum) {
    ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum["Notification"] = "notification";
})(ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum = exports.ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum || (exports.ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum = {}));
var ShareShareRelationshipsShareRelationshipsNotificationData = /** @class */ (function (_super) {
    __extends(ShareShareRelationshipsShareRelationshipsNotificationData, _super);
    function ShareShareRelationshipsShareRelationshipsNotificationData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ShareShareRelationshipsShareRelationshipsNotificationData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ShareShareRelationshipsShareRelationshipsNotificationData.prototype, "type", void 0);
    return ShareShareRelationshipsShareRelationshipsNotificationData;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationshipsShareRelationshipsNotificationData = ShareShareRelationshipsShareRelationshipsNotificationData;
var ShareShareRelationshipsShareRelationshipsNotification = /** @class */ (function (_super) {
    __extends(ShareShareRelationshipsShareRelationshipsNotification, _super);
    function ShareShareRelationshipsShareRelationshipsNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ShareShareRelationshipsShareRelationshipsNotificationData)
    ], ShareShareRelationshipsShareRelationshipsNotification.prototype, "data", void 0);
    return ShareShareRelationshipsShareRelationshipsNotification;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationshipsShareRelationshipsNotification = ShareShareRelationshipsShareRelationshipsNotification;
var ShareShareRelationshipsShareRelationshipsOwnerData = /** @class */ (function (_super) {
    __extends(ShareShareRelationshipsShareRelationshipsOwnerData, _super);
    function ShareShareRelationshipsShareRelationshipsOwnerData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ShareShareRelationshipsShareRelationshipsOwnerData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ShareShareRelationshipsShareRelationshipsOwnerData.prototype, "type", void 0);
    return ShareShareRelationshipsShareRelationshipsOwnerData;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationshipsShareRelationshipsOwnerData = ShareShareRelationshipsShareRelationshipsOwnerData;
var ShareShareRelationshipsShareRelationshipsOwner = /** @class */ (function (_super) {
    __extends(ShareShareRelationshipsShareRelationshipsOwner, _super);
    function ShareShareRelationshipsShareRelationshipsOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ShareShareRelationshipsShareRelationshipsOwnerData)
    ], ShareShareRelationshipsShareRelationshipsOwner.prototype, "data", void 0);
    return ShareShareRelationshipsShareRelationshipsOwner;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationshipsShareRelationshipsOwner = ShareShareRelationshipsShareRelationshipsOwner;
var ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum;
(function (ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum) {
    ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum["Resource"] = "resource";
})(ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum = exports.ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum || (exports.ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum = {}));
var ShareShareRelationshipsShareRelationshipsResourceShareResourceData = /** @class */ (function (_super) {
    __extends(ShareShareRelationshipsShareRelationshipsResourceShareResourceData, _super);
    function ShareShareRelationshipsShareRelationshipsResourceShareResourceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ShareShareRelationshipsShareRelationshipsResourceShareResourceData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ShareShareRelationshipsShareRelationshipsResourceShareResourceData.prototype, "type", void 0);
    return ShareShareRelationshipsShareRelationshipsResourceShareResourceData;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationshipsShareRelationshipsResourceShareResourceData = ShareShareRelationshipsShareRelationshipsResourceShareResourceData;
var ShareShareRelationshipsShareRelationshipsResource = /** @class */ (function (_super) {
    __extends(ShareShareRelationshipsShareRelationshipsResource, _super);
    function ShareShareRelationshipsShareRelationshipsResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ShareShareRelationshipsShareRelationshipsResourceShareResourceData)
    ], ShareShareRelationshipsShareRelationshipsResource.prototype, "data", void 0);
    return ShareShareRelationshipsShareRelationshipsResource;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationshipsShareRelationshipsResource = ShareShareRelationshipsShareRelationshipsResource;
// ShareShareRelationships
/**
 * Message, owner, resource, and notification relationships of the share.
**/
var ShareShareRelationships = /** @class */ (function (_super) {
    __extends(ShareShareRelationships, _super);
    function ShareShareRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: ShareShareRelationshipsShareRelationshipsMessage }),
        __metadata("design:type", Array)
    ], ShareShareRelationships.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notifications", elemType: ShareShareRelationshipsShareRelationshipsNotification }),
        __metadata("design:type", Array)
    ], ShareShareRelationships.prototype, "notifications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", ShareShareRelationshipsShareRelationshipsOwner)
    ], ShareShareRelationships.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: ShareShareRelationshipsShareRelationshipsResource }),
        __metadata("design:type", Array)
    ], ShareShareRelationships.prototype, "resources", void 0);
    return ShareShareRelationships;
}(utils_1.SpeakeasyBase));
exports.ShareShareRelationships = ShareShareRelationships;
var ShareTypeEnum;
(function (ShareTypeEnum) {
    ShareTypeEnum["Share"] = "share";
})(ShareTypeEnum = exports.ShareTypeEnum || (exports.ShareTypeEnum = {}));
// Share
/**
 * Object contains share properties.
**/
var Share = /** @class */ (function (_super) {
    __extends(Share, _super);
    function Share() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", shareattributes_1.ShareAttributes)
    ], Share.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Share.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", ShareShareRelationships)
    ], Share.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Share.prototype, "type", void 0);
    return Share;
}(utils_1.SpeakeasyBase));
exports.Share = Share;
