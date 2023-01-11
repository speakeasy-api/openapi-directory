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
exports.ProjectCompletePrivate = exports.ProjectCompletePrivateStorageEnum = exports.ProjectCompletePrivateRoleEnum = void 0;
var utils_1 = require("../../../internal/utils");
var collaborator_1 = require("./collaborator");
var fundinginformation_1 = require("./fundinginformation");
var ProjectCompletePrivateRoleEnum;
(function (ProjectCompletePrivateRoleEnum) {
    ProjectCompletePrivateRoleEnum["Owner"] = "Owner";
    ProjectCompletePrivateRoleEnum["Collaborator"] = "Collaborator";
    ProjectCompletePrivateRoleEnum["Viewer"] = "Viewer";
})(ProjectCompletePrivateRoleEnum = exports.ProjectCompletePrivateRoleEnum || (exports.ProjectCompletePrivateRoleEnum = {}));
var ProjectCompletePrivateStorageEnum;
(function (ProjectCompletePrivateStorageEnum) {
    ProjectCompletePrivateStorageEnum["Individual"] = "individual";
    ProjectCompletePrivateStorageEnum["Group"] = "group";
})(ProjectCompletePrivateStorageEnum = exports.ProjectCompletePrivateStorageEnum || (exports.ProjectCompletePrivateStorageEnum = {}));
var ProjectCompletePrivate = /** @class */ (function (_super) {
    __extends(ProjectCompletePrivate, _super);
    function ProjectCompletePrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collaborators", elemType: collaborator_1.Collaborator }),
        __metadata("design:type", Array)
    ], ProjectCompletePrivate.prototype, "collaborators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_date" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=figshare_url" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "figshareUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=funding" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "funding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=funding_list", elemType: fundinginformation_1.FundingInformation }),
        __metadata("design:type", Array)
    ], ProjectCompletePrivate.prototype, "fundingList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_id" }),
        __metadata("design:type", Number)
    ], ProjectCompletePrivate.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ProjectCompletePrivate.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_date" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "modifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published_date" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "publishedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quota" }),
        __metadata("design:type", Number)
    ], ProjectCompletePrivate.prototype, "quota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storage" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "storage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProjectCompletePrivate.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used_quota" }),
        __metadata("design:type", Number)
    ], ProjectCompletePrivate.prototype, "usedQuota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used_quota_private" }),
        __metadata("design:type", Number)
    ], ProjectCompletePrivate.prototype, "usedQuotaPrivate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used_quota_public" }),
        __metadata("design:type", Number)
    ], ProjectCompletePrivate.prototype, "usedQuotaPublic", void 0);
    return ProjectCompletePrivate;
}(utils_1.SpeakeasyBase));
exports.ProjectCompletePrivate = ProjectCompletePrivate;
