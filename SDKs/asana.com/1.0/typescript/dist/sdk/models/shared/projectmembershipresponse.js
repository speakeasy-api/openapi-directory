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
exports.ProjectMembershipResponse = exports.ProjectMembershipResponseWriteAccessEnum = void 0;
var utils_1 = require("../../../internal/utils");
var projectcompact_1 = require("./projectcompact");
var usercompact_1 = require("./usercompact");
var ProjectMembershipResponseWriteAccessEnum;
(function (ProjectMembershipResponseWriteAccessEnum) {
    ProjectMembershipResponseWriteAccessEnum["FullWrite"] = "full_write";
    ProjectMembershipResponseWriteAccessEnum["CommentOnly"] = "comment_only";
})(ProjectMembershipResponseWriteAccessEnum = exports.ProjectMembershipResponseWriteAccessEnum || (exports.ProjectMembershipResponseWriteAccessEnum = {}));
// ProjectMembershipResponse
/**
 * With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
**/
var ProjectMembershipResponse = /** @class */ (function (_super) {
    __extends(ProjectMembershipResponse, _super);
    function ProjectMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], ProjectMembershipResponse.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project" }),
        __metadata("design:type", projectcompact_1.ProjectCompact)
    ], ProjectMembershipResponse.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ProjectMembershipResponse.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", usercompact_1.UserCompact)
    ], ProjectMembershipResponse.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=write_access" }),
        __metadata("design:type", String)
    ], ProjectMembershipResponse.prototype, "writeAccess", void 0);
    return ProjectMembershipResponse;
}(utils_1.SpeakeasyBase));
exports.ProjectMembershipResponse = ProjectMembershipResponse;
