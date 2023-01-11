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
exports.WorkspaceMembershipResponse = void 0;
var utils_1 = require("../../../internal/utils");
var usercompact_1 = require("./usercompact");
var usertasklistresponse_1 = require("./usertasklistresponse");
var workspacecompact_1 = require("./workspacecompact");
// WorkspaceMembershipResponse
/**
 * This object determines if a user is a member of a workspace.
**/
var WorkspaceMembershipResponse = /** @class */ (function (_super) {
    __extends(WorkspaceMembershipResponse, _super);
    function WorkspaceMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], WorkspaceMembershipResponse.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_active" }),
        __metadata("design:type", Boolean)
    ], WorkspaceMembershipResponse.prototype, "isActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_admin" }),
        __metadata("design:type", Boolean)
    ], WorkspaceMembershipResponse.prototype, "isAdmin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_guest" }),
        __metadata("design:type", Boolean)
    ], WorkspaceMembershipResponse.prototype, "isGuest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], WorkspaceMembershipResponse.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", usercompact_1.UserCompact)
    ], WorkspaceMembershipResponse.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_task_list" }),
        __metadata("design:type", usertasklistresponse_1.UserTaskListResponse)
    ], WorkspaceMembershipResponse.prototype, "userTaskList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workspace" }),
        __metadata("design:type", workspacecompact_1.WorkspaceCompact)
    ], WorkspaceMembershipResponse.prototype, "workspace", void 0);
    return WorkspaceMembershipResponse;
}(utils_1.SpeakeasyBase));
exports.WorkspaceMembershipResponse = WorkspaceMembershipResponse;
