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
exports.Notification = exports.NotificationRelationships = exports.NotificationRelationshipsShare = exports.NotificationRelationshipsShareData = exports.NotificationRelationshipsResource = exports.NotificationRelationshipsResourceData = exports.NotificationRelationshipsOwnerUser = exports.NotificationRelationshipsOwnerUserData = exports.NotificationRelationshipsOwnerUserDataTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var notificationattributes_1 = require("./notificationattributes");
var NotificationRelationshipsOwnerUserDataTypeEnum;
(function (NotificationRelationshipsOwnerUserDataTypeEnum) {
    NotificationRelationshipsOwnerUserDataTypeEnum["User"] = "user";
})(NotificationRelationshipsOwnerUserDataTypeEnum = exports.NotificationRelationshipsOwnerUserDataTypeEnum || (exports.NotificationRelationshipsOwnerUserDataTypeEnum = {}));
var NotificationRelationshipsOwnerUserData = /** @class */ (function (_super) {
    __extends(NotificationRelationshipsOwnerUserData, _super);
    function NotificationRelationshipsOwnerUserData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NotificationRelationshipsOwnerUserData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NotificationRelationshipsOwnerUserData.prototype, "type", void 0);
    return NotificationRelationshipsOwnerUserData;
}(utils_1.SpeakeasyBase));
exports.NotificationRelationshipsOwnerUserData = NotificationRelationshipsOwnerUserData;
var NotificationRelationshipsOwnerUser = /** @class */ (function (_super) {
    __extends(NotificationRelationshipsOwnerUser, _super);
    function NotificationRelationshipsOwnerUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", NotificationRelationshipsOwnerUserData)
    ], NotificationRelationshipsOwnerUser.prototype, "data", void 0);
    return NotificationRelationshipsOwnerUser;
}(utils_1.SpeakeasyBase));
exports.NotificationRelationshipsOwnerUser = NotificationRelationshipsOwnerUser;
var NotificationRelationshipsResourceData = /** @class */ (function (_super) {
    __extends(NotificationRelationshipsResourceData, _super);
    function NotificationRelationshipsResourceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NotificationRelationshipsResourceData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NotificationRelationshipsResourceData.prototype, "type", void 0);
    return NotificationRelationshipsResourceData;
}(utils_1.SpeakeasyBase));
exports.NotificationRelationshipsResourceData = NotificationRelationshipsResourceData;
var NotificationRelationshipsResource = /** @class */ (function (_super) {
    __extends(NotificationRelationshipsResource, _super);
    function NotificationRelationshipsResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", NotificationRelationshipsResourceData)
    ], NotificationRelationshipsResource.prototype, "data", void 0);
    return NotificationRelationshipsResource;
}(utils_1.SpeakeasyBase));
exports.NotificationRelationshipsResource = NotificationRelationshipsResource;
var NotificationRelationshipsShareData = /** @class */ (function (_super) {
    __extends(NotificationRelationshipsShareData, _super);
    function NotificationRelationshipsShareData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NotificationRelationshipsShareData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NotificationRelationshipsShareData.prototype, "type", void 0);
    return NotificationRelationshipsShareData;
}(utils_1.SpeakeasyBase));
exports.NotificationRelationshipsShareData = NotificationRelationshipsShareData;
var NotificationRelationshipsShare = /** @class */ (function (_super) {
    __extends(NotificationRelationshipsShare, _super);
    function NotificationRelationshipsShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", NotificationRelationshipsShareData)
    ], NotificationRelationshipsShare.prototype, "data", void 0);
    return NotificationRelationshipsShare;
}(utils_1.SpeakeasyBase));
exports.NotificationRelationshipsShare = NotificationRelationshipsShare;
var NotificationRelationships = /** @class */ (function (_super) {
    __extends(NotificationRelationships, _super);
    function NotificationRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerUser" }),
        __metadata("design:type", NotificationRelationshipsOwnerUser)
    ], NotificationRelationships.prototype, "ownerUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", NotificationRelationshipsResource)
    ], NotificationRelationships.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share" }),
        __metadata("design:type", NotificationRelationshipsShare)
    ], NotificationRelationships.prototype, "share", void 0);
    return NotificationRelationships;
}(utils_1.SpeakeasyBase));
exports.NotificationRelationships = NotificationRelationships;
// Notification
/**
 * Object containing notification properties.
**/
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", notificationattributes_1.NotificationAttributes)
    ], Notification.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Notification.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", NotificationRelationships)
    ], Notification.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Notification.prototype, "type", void 0);
    return Notification;
}(utils_1.SpeakeasyBase));
exports.Notification = Notification;
