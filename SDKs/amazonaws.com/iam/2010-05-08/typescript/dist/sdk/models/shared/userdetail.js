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
exports.UserDetail = void 0;
var utils_1 = require("../../../internal/utils");
var attachedpolicy_1 = require("./attachedpolicy");
var attachedpermissionsboundary_1 = require("./attachedpermissionsboundary");
var tag_1 = require("./tag");
var policydetail_1 = require("./policydetail");
// UserDetail
/**
 * <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
var UserDetail = /** @class */ (function (_super) {
    __extends(UserDetail, _super);
    function UserDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserDetail.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: attachedpolicy_1.AttachedPolicy }),
        __metadata("design:type", Array)
    ], UserDetail.prototype, "attachedManagedPolicies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], UserDetail.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], UserDetail.prototype, "groupList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserDetail.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", attachedpermissionsboundary_1.AttachedPermissionsBoundary)
    ], UserDetail.prototype, "permissionsBoundary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], UserDetail.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserDetail.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserDetail.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: policydetail_1.PolicyDetail }),
        __metadata("design:type", Array)
    ], UserDetail.prototype, "userPolicyList", void 0);
    return UserDetail;
}(utils_1.SpeakeasyBase));
exports.UserDetail = UserDetail;
