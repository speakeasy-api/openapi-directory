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
exports.GetAccountAuthorizationDetailsResponse = void 0;
var utils_1 = require("../../../internal/utils");
var groupdetail_1 = require("./groupdetail");
var managedpolicydetail_1 = require("./managedpolicydetail");
var roledetail_1 = require("./roledetail");
var userdetail_1 = require("./userdetail");
// GetAccountAuthorizationDetailsResponse
/**
 * Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request.
**/
var GetAccountAuthorizationDetailsResponse = /** @class */ (function (_super) {
    __extends(GetAccountAuthorizationDetailsResponse, _super);
    function GetAccountAuthorizationDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: groupdetail_1.GroupDetail }),
        __metadata("design:type", Array)
    ], GetAccountAuthorizationDetailsResponse.prototype, "groupDetailList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], GetAccountAuthorizationDetailsResponse.prototype, "isTruncated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAccountAuthorizationDetailsResponse.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: managedpolicydetail_1.ManagedPolicyDetail }),
        __metadata("design:type", Array)
    ], GetAccountAuthorizationDetailsResponse.prototype, "policies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: roledetail_1.RoleDetail }),
        __metadata("design:type", Array)
    ], GetAccountAuthorizationDetailsResponse.prototype, "roleDetailList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: userdetail_1.UserDetail }),
        __metadata("design:type", Array)
    ], GetAccountAuthorizationDetailsResponse.prototype, "userDetailList", void 0);
    return GetAccountAuthorizationDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAccountAuthorizationDetailsResponse = GetAccountAuthorizationDetailsResponse;
