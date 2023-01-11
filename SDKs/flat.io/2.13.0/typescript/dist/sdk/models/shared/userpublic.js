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
exports.UserPublic = exports.UserPublicTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var classrolesenum_1 = require("./classrolesenum");
var organizationrolesenum_1 = require("./organizationrolesenum");
var UserPublicTypeEnum;
(function (UserPublicTypeEnum) {
    UserPublicTypeEnum["User"] = "user";
    UserPublicTypeEnum["Guest"] = "guest";
})(UserPublicTypeEnum = exports.UserPublicTypeEnum || (exports.UserPublicTypeEnum = {}));
// UserPublic
/**
 * Public User details summary
**/
var UserPublic = /** @class */ (function (_super) {
    __extends(UserPublic, _super);
    function UserPublic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "bio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classRole" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "classRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverPicture" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "coverPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "firstname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followersCount" }),
        __metadata("design:type", Number)
    ], UserPublic.prototype, "followersCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followingCount" }),
        __metadata("design:type", Number)
    ], UserPublic.prototype, "followingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlUrl" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instruments" }),
        __metadata("design:type", Array)
    ], UserPublic.prototype, "instruments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isFlatTeam" }),
        __metadata("design:type", Boolean)
    ], UserPublic.prototype, "isFlatTeam", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPowerUser" }),
        __metadata("design:type", Boolean)
    ], UserPublic.prototype, "isPowerUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "lastname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likedScoresCount" }),
        __metadata("design:type", Number)
    ], UserPublic.prototype, "likedScoresCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "organization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organizationRole" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "organizationRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownedPublicScoresCount" }),
        __metadata("design:type", Number)
    ], UserPublic.prototype, "ownedPublicScoresCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=picture" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "picture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printableName" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "printableName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profileTheme" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "profileTheme", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrationDate" }),
        __metadata("design:type", Date)
    ], UserPublic.prototype, "registrationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserPublic.prototype, "username", void 0);
    return UserPublic;
}(utils_1.SpeakeasyBase));
exports.UserPublic = UserPublic;
