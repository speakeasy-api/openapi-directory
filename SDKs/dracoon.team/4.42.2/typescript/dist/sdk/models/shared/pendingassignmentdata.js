"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PendingAssignmentData = exports.PendingAssignmentDataStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var groupinfo_1 = require("./groupinfo");
var pendinggroupdata_1 = require("./pendinggroupdata");
var pendinguserdata_1 = require("./pendinguserdata");
var userinfo_1 = require("./userinfo");
var class_transformer_1 = require("class-transformer");
/**
 * Acceptance state:
 *
 * @remarks
 *
 * * `ACCEPTED`
 *
 * * `WAITING`
 *
 * * `DENIED`
 */
var PendingAssignmentDataStateEnum;
(function (PendingAssignmentDataStateEnum) {
    PendingAssignmentDataStateEnum["Accepted"] = "ACCEPTED";
    PendingAssignmentDataStateEnum["Denied"] = "DENIED";
    PendingAssignmentDataStateEnum["Waiting"] = "WAITING";
})(PendingAssignmentDataStateEnum = exports.PendingAssignmentDataStateEnum || (exports.PendingAssignmentDataStateEnum = {}));
/**
 * Pending assignment information
 */
var PendingAssignmentData = /** @class */ (function (_super) {
    __extends(PendingAssignmentData, _super);
    function PendingAssignmentData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "groupInfo" }),
        (0, class_transformer_1.Type)(function () { return groupinfo_1.GroupInfo; }),
        __metadata("design:type", groupinfo_1.GroupInfo)
    ], PendingAssignmentData.prototype, "groupInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pendingGroupData" }),
        (0, class_transformer_1.Type)(function () { return pendinggroupdata_1.PendingGroupData; }),
        __metadata("design:type", pendinggroupdata_1.PendingGroupData)
    ], PendingAssignmentData.prototype, "pendingGroupData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pendingUserData" }),
        (0, class_transformer_1.Type)(function () { return pendinguserdata_1.PendingUserData; }),
        __metadata("design:type", pendinguserdata_1.PendingUserData)
    ], PendingAssignmentData.prototype, "pendingUserData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "roomId" }),
        __metadata("design:type", Number)
    ], PendingAssignmentData.prototype, "roomId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "roomName" }),
        __metadata("design:type", String)
    ], PendingAssignmentData.prototype, "roomName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], PendingAssignmentData.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "userInfo" }),
        (0, class_transformer_1.Type)(function () { return userinfo_1.UserInfo; }),
        __metadata("design:type", userinfo_1.UserInfo)
    ], PendingAssignmentData.prototype, "userInfo", void 0);
    return PendingAssignmentData;
}(utils_1.SpeakeasyBase));
exports.PendingAssignmentData = PendingAssignmentData;
