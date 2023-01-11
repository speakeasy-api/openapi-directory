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
exports.Identity = void 0;
var utils_1 = require("../../../internal/utils");
var groupidentity_1 = require("./groupidentity");
var iamroleidentity_1 = require("./iamroleidentity");
var iamuseridentity_1 = require("./iamuseridentity");
var useridentity_1 = require("./useridentity");
// Identity
/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
var Identity = /** @class */ (function (_super) {
    __extends(Identity, _super);
    function Identity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group" }),
        __metadata("design:type", groupidentity_1.GroupIdentity)
    ], Identity.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamRole" }),
        __metadata("design:type", iamroleidentity_1.IamRoleIdentity)
    ], Identity.prototype, "iamRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamUser" }),
        __metadata("design:type", iamuseridentity_1.IamUserIdentity)
    ], Identity.prototype, "iamUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", useridentity_1.UserIdentity)
    ], Identity.prototype, "user", void 0);
    return Identity;
}(utils_1.SpeakeasyBase));
exports.Identity = Identity;
