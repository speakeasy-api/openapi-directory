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
exports.UserDetails = exports.UserDetailsTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var classrolesenum_1 = require("./classrolesenum");
var flatlocalesenum_1 = require("./flatlocalesenum");
var organizationrolesenum_1 = require("./organizationrolesenum");
var UserDetailsTypeEnum;
(function (UserDetailsTypeEnum) {
    UserDetailsTypeEnum["User"] = "user";
    UserDetailsTypeEnum["Guest"] = "guest";
})(UserDetailsTypeEnum = exports.UserDetailsTypeEnum || (exports.UserDetailsTypeEnum = {}));
// UserDetails
/**
 * Public User details summary
**/
var UserDetails = /** @class */ (function (_super) {
    __extends(UserDetails, _super);
    function UserDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "bio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classRole" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "classRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverPicture" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "coverPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverPictureFile" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "coverPictureFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "firstname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followersCount" }),
        __metadata("design:type", Number)
    ], UserDetails.prototype, "followersCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followingCount" }),
        __metadata("design:type", Number)
    ], UserDetails.prototype, "followingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlUrl" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instruments" }),
        __metadata("design:type", Array)
    ], UserDetails.prototype, "instruments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isFlatTeam" }),
        __metadata("design:type", Boolean)
    ], UserDetails.prototype, "isFlatTeam", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPowerUser" }),
        __metadata("design:type", Boolean)
    ], UserDetails.prototype, "isPowerUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "lastname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likedScoresCount" }),
        __metadata("design:type", Number)
    ], UserDetails.prototype, "likedScoresCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "organization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organizationRole" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "organizationRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownedPublicScoresCount" }),
        __metadata("design:type", Number)
    ], UserDetails.prototype, "ownedPublicScoresCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=picture" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "picture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictureFile" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "pictureFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printableName" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "printableName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateProfile" }),
        __metadata("design:type", Boolean)
    ], UserDetails.prototype, "privateProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profileTheme" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "profileTheme", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrationDate" }),
        __metadata("design:type", Date)
    ], UserDetails.prototype, "registrationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserDetails.prototype, "username", void 0);
    return UserDetails;
}(utils_1.SpeakeasyBase));
exports.UserDetails = UserDetails;
