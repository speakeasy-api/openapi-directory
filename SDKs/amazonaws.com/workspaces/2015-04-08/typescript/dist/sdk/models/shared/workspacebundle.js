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
exports.WorkspaceBundle = void 0;
var utils_1 = require("../../../internal/utils");
var bundletypeenum_1 = require("./bundletypeenum");
var computetype_1 = require("./computetype");
var rootstorage_1 = require("./rootstorage");
var userstorage_1 = require("./userstorage");
var workspacebundlestateenum_1 = require("./workspacebundlestateenum");
var class_transformer_1 = require("class-transformer");
/**
 * Describes a WorkSpace bundle.
 */
var WorkspaceBundle = /** @class */ (function (_super) {
    __extends(WorkspaceBundle, _super);
    function WorkspaceBundle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "BundleId" }),
        __metadata("design:type", String)
    ], WorkspaceBundle.prototype, "bundleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "BundleType" }),
        __metadata("design:type", String)
    ], WorkspaceBundle.prototype, "bundleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ComputeType" }),
        (0, class_transformer_1.Type)(function () { return computetype_1.ComputeType; }),
        __metadata("design:type", computetype_1.ComputeType)
    ], WorkspaceBundle.prototype, "computeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CreationTime" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], WorkspaceBundle.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Description" }),
        __metadata("design:type", String)
    ], WorkspaceBundle.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ImageId" }),
        __metadata("design:type", String)
    ], WorkspaceBundle.prototype, "imageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "LastUpdatedTime" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], WorkspaceBundle.prototype, "lastUpdatedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Name" }),
        __metadata("design:type", String)
    ], WorkspaceBundle.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Owner" }),
        __metadata("design:type", String)
    ], WorkspaceBundle.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "RootStorage" }),
        (0, class_transformer_1.Type)(function () { return rootstorage_1.RootStorage; }),
        __metadata("design:type", rootstorage_1.RootStorage)
    ], WorkspaceBundle.prototype, "rootStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "State" }),
        __metadata("design:type", String)
    ], WorkspaceBundle.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UserStorage" }),
        (0, class_transformer_1.Type)(function () { return userstorage_1.UserStorage; }),
        __metadata("design:type", userstorage_1.UserStorage)
    ], WorkspaceBundle.prototype, "userStorage", void 0);
    return WorkspaceBundle;
}(utils_1.SpeakeasyBase));
exports.WorkspaceBundle = WorkspaceBundle;
