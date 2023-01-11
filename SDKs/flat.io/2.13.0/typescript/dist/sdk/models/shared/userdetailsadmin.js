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
exports.UserDetailsAdmin = exports.UserDetailsAdminTypeEnum = exports.UserDetailsAdminLicense = void 0;
var utils_1 = require("../../../internal/utils");
var licensemodeenum_1 = require("./licensemodeenum");
var licensesourcesenum_1 = require("./licensesourcesenum");
var classrolesenum_1 = require("./classrolesenum");
var organizationrolesenum_1 = require("./organizationrolesenum");
// UserDetailsAdminLicense
/**
 * Current active license of the user
**/
var UserDetailsAdminLicense = /** @class */ (function (_super) {
    __extends(UserDetailsAdminLicense, _super);
    function UserDetailsAdminLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UserDetailsAdminLicense.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], UserDetailsAdminLicense.prototype, "expirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserDetailsAdminLicense.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], UserDetailsAdminLicense.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], UserDetailsAdminLicense.prototype, "source", void 0);
    return UserDetailsAdminLicense;
}(utils_1.SpeakeasyBase));
exports.UserDetailsAdminLicense = UserDetailsAdminLicense;
var UserDetailsAdminTypeEnum;
(function (UserDetailsAdminTypeEnum) {
    UserDetailsAdminTypeEnum["User"] = "user";
    UserDetailsAdminTypeEnum["Guest"] = "guest";
})(UserDetailsAdminTypeEnum = exports.UserDetailsAdminTypeEnum || (exports.UserDetailsAdminTypeEnum = {}));
// UserDetailsAdmin
/**
 * Public User details summary
**/
var UserDetailsAdmin = /** @class */ (function (_super) {
    __extends(UserDetailsAdmin, _super);
    function UserDetailsAdmin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classRole" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "classRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "firstname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlUrl" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isFlatTeam" }),
        __metadata("design:type", Boolean)
    ], UserDetailsAdmin.prototype, "isFlatTeam", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPowerUser" }),
        __metadata("design:type", Boolean)
    ], UserDetailsAdmin.prototype, "isPowerUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastActivityDate" }),
        __metadata("design:type", Date)
    ], UserDetailsAdmin.prototype, "lastActivityDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "lastname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", UserDetailsAdminLicense)
    ], UserDetailsAdmin.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "organization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organizationRole" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "organizationRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=picture" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "picture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printableName" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "printableName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserDetailsAdmin.prototype, "username", void 0);
    return UserDetailsAdmin;
}(utils_1.SpeakeasyBase));
exports.UserDetailsAdmin = UserDetailsAdmin;
