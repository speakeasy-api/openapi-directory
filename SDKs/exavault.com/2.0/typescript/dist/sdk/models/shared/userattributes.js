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
exports.UserAttributes = exports.UserAttributesRoleEnum = void 0;
var utils_1 = require("../../../internal/utils");
var userpermissions_1 = require("./userpermissions");
var UserAttributesRoleEnum;
(function (UserAttributesRoleEnum) {
    UserAttributesRoleEnum["User"] = "user";
    UserAttributesRoleEnum["Admin"] = "admin";
    UserAttributesRoleEnum["Master"] = "master";
})(UserAttributesRoleEnum = exports.UserAttributesRoleEnum || (exports.UserAttributesRoleEnum = {}));
// UserAttributes
/**
 * Attributes of the user including expiration, home directory, and permissions.
**/
var UserAttributes = /** @class */ (function (_super) {
    __extends(UserAttributes, _super);
    function UserAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessTimestamp" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "accessTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], UserAttributes.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiration" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "expiration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstLogin" }),
        __metadata("design:type", Boolean)
    ], UserAttributes.prototype, "firstLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homePath" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "homePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], UserAttributes.prototype, "locked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Date)
    ], UserAttributes.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onboarding" }),
        __metadata("design:type", Boolean)
    ], UserAttributes.prototype, "onboarding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissions" }),
        __metadata("design:type", userpermissions_1.UserPermissions)
    ], UserAttributes.prototype, "permissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UserAttributes.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "timeZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserAttributes.prototype, "username", void 0);
    return UserAttributes;
}(utils_1.SpeakeasyBase));
exports.UserAttributes = UserAttributes;
