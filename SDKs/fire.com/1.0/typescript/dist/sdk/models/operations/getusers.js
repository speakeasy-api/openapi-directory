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
exports.GetUsersResponse = exports.GetUsersUser = exports.GetUsersUserStatusEnum = exports.GetUsersUserRoleEnum = exports.GetUsersUserMobileApplication = exports.GetUsersUserMobileApplicationStatusEnum = exports.GetUsersUserMobileApplicationDeviceNameEnum = exports.GetUsersUserMobileApplicationOsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetUsersUserMobileApplicationOsEnum;
(function (GetUsersUserMobileApplicationOsEnum) {
    GetUsersUserMobileApplicationOsEnum["Android"] = "Android";
    GetUsersUserMobileApplicationOsEnum["Ios"] = "IOS";
    GetUsersUserMobileApplicationOsEnum["Other"] = "OTHER";
})(GetUsersUserMobileApplicationOsEnum = exports.GetUsersUserMobileApplicationOsEnum || (exports.GetUsersUserMobileApplicationOsEnum = {}));
var GetUsersUserMobileApplicationDeviceNameEnum;
(function (GetUsersUserMobileApplicationDeviceNameEnum) {
    GetUsersUserMobileApplicationDeviceNameEnum["IPhone"] = "iPhone";
    GetUsersUserMobileApplicationDeviceNameEnum["Android"] = "Android";
    GetUsersUserMobileApplicationDeviceNameEnum["Other"] = "Other";
})(GetUsersUserMobileApplicationDeviceNameEnum = exports.GetUsersUserMobileApplicationDeviceNameEnum || (exports.GetUsersUserMobileApplicationDeviceNameEnum = {}));
var GetUsersUserMobileApplicationStatusEnum;
(function (GetUsersUserMobileApplicationStatusEnum) {
    GetUsersUserMobileApplicationStatusEnum["Live"] = "LIVE";
    GetUsersUserMobileApplicationStatusEnum["Closed"] = "CLOSED";
    GetUsersUserMobileApplicationStatusEnum["Locked"] = "LOCKED";
    GetUsersUserMobileApplicationStatusEnum["SmsSent"] = "SMS_SENT";
})(GetUsersUserMobileApplicationStatusEnum = exports.GetUsersUserMobileApplicationStatusEnum || (exports.GetUsersUserMobileApplicationStatusEnum = {}));
var GetUsersUserMobileApplication = /** @class */ (function (_super) {
    __extends(GetUsersUserMobileApplication, _super);
    function GetUsersUserMobileApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OS" }),
        __metadata("design:type", String)
    ], GetUsersUserMobileApplication.prototype, "os", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=businessUserId" }),
        __metadata("design:type", Number)
    ], GetUsersUserMobileApplication.prototype, "businessUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientID" }),
        __metadata("design:type", String)
    ], GetUsersUserMobileApplication.prototype, "clientID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceName" }),
        __metadata("design:type", String)
    ], GetUsersUserMobileApplication.prototype, "deviceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceOSVersion" }),
        __metadata("design:type", String)
    ], GetUsersUserMobileApplication.prototype, "deviceOSVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileApplicationId" }),
        __metadata("design:type", Number)
    ], GetUsersUserMobileApplication.prototype, "mobileApplicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUsersUserMobileApplication.prototype, "status", void 0);
    return GetUsersUserMobileApplication;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserMobileApplication = GetUsersUserMobileApplication;
var GetUsersUserRoleEnum;
(function (GetUsersUserRoleEnum) {
    GetUsersUserRoleEnum["Admin"] = "ADMIN";
    GetUsersUserRoleEnum["FullUser"] = "FULL_USER";
    GetUsersUserRoleEnum["ReadOnly"] = "READ_ONLY";
    GetUsersUserRoleEnum["CardOnly"] = "CARD_ONLY";
})(GetUsersUserRoleEnum = exports.GetUsersUserRoleEnum || (exports.GetUsersUserRoleEnum = {}));
var GetUsersUserStatusEnum;
(function (GetUsersUserStatusEnum) {
    GetUsersUserStatusEnum["Live"] = "LIVE";
    GetUsersUserStatusEnum["Closed"] = "CLOSED";
    GetUsersUserStatusEnum["Frozen"] = "FROZEN";
    GetUsersUserStatusEnum["InviteSent"] = "INVITE_SENT";
    GetUsersUserStatusEnum["SmsCodeSent"] = "SMS_CODE_SENT";
})(GetUsersUserStatusEnum = exports.GetUsersUserStatusEnum || (exports.GetUsersUserStatusEnum = {}));
var GetUsersUser = /** @class */ (function (_super) {
    __extends(GetUsersUser, _super);
    function GetUsersUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], GetUsersUser.prototype, "emailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GetUsersUser.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetUsersUser.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GetUsersUser.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastlogin" }),
        __metadata("design:type", String)
    ], GetUsersUser.prototype, "lastlogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileApplicationDetails" }),
        __metadata("design:type", GetUsersUserMobileApplication)
    ], GetUsersUser.prototype, "mobileApplicationDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileNumber" }),
        __metadata("design:type", String)
    ], GetUsersUser.prototype, "mobileNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], GetUsersUser.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUsersUser.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userCvl" }),
        __metadata("design:type", String)
    ], GetUsersUser.prototype, "userCvl", void 0);
    return GetUsersUser;
}(utils_1.SpeakeasyBase));
exports.GetUsersUser = GetUsersUser;
var GetUsersResponse = /** @class */ (function (_super) {
    __extends(GetUsersResponse, _super);
    function GetUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GetUsersUser }),
        __metadata("design:type", Array)
    ], GetUsersResponse.prototype, "users", void 0);
    return GetUsersResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersResponse = GetUsersResponse;
