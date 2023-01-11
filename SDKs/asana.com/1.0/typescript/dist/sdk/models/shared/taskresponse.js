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
exports.TaskResponse = exports.TaskResponseWorkspace = exports.TaskResponseResourceSubtypeEnum = exports.TaskResponseParent = exports.TaskResponseMemberships = exports.TaskResponseExternal = exports.TaskResponseAssigneeStatusEnum = exports.TaskResponseAssigneeSection = exports.TaskResponseAssignee = exports.TaskResponseApprovalStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var projectcompact_1 = require("./projectcompact");
var sectioncompact_1 = require("./sectioncompact");
var usercompact_1 = require("./usercompact");
var customfieldresponse_1 = require("./customfieldresponse");
var asanaresource_1 = require("./asanaresource");
var like_1 = require("./like");
var tagcompact_1 = require("./tagcompact");
var TaskResponseApprovalStatusEnum;
(function (TaskResponseApprovalStatusEnum) {
    TaskResponseApprovalStatusEnum["Pending"] = "pending";
    TaskResponseApprovalStatusEnum["Approved"] = "approved";
    TaskResponseApprovalStatusEnum["Rejected"] = "rejected";
    TaskResponseApprovalStatusEnum["ChangesRequested"] = "changes_requested";
})(TaskResponseApprovalStatusEnum = exports.TaskResponseApprovalStatusEnum || (exports.TaskResponseApprovalStatusEnum = {}));
// TaskResponseAssignee
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
var TaskResponseAssignee = /** @class */ (function (_super) {
    __extends(TaskResponseAssignee, _super);
    function TaskResponseAssignee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseAssignee.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponseAssignee.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponseAssignee.prototype, "resourceType", void 0);
    return TaskResponseAssignee;
}(utils_1.SpeakeasyBase));
exports.TaskResponseAssignee = TaskResponseAssignee;
// TaskResponseAssigneeSection
/**
 * The *assignee section* is a subdivision of a project that groups tasks together in the assignee's "My Tasks" list. It can either be a header above a list of tasks in a list view or a column in a board view of "My Tasks."
 * The `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user's "My Tasks" list.
**/
var TaskResponseAssigneeSection = /** @class */ (function (_super) {
    __extends(TaskResponseAssigneeSection, _super);
    function TaskResponseAssigneeSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseAssigneeSection.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponseAssigneeSection.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponseAssigneeSection.prototype, "resourceType", void 0);
    return TaskResponseAssigneeSection;
}(utils_1.SpeakeasyBase));
exports.TaskResponseAssigneeSection = TaskResponseAssigneeSection;
var TaskResponseAssigneeStatusEnum;
(function (TaskResponseAssigneeStatusEnum) {
    TaskResponseAssigneeStatusEnum["Today"] = "today";
    TaskResponseAssigneeStatusEnum["Upcoming"] = "upcoming";
    TaskResponseAssigneeStatusEnum["Later"] = "later";
    TaskResponseAssigneeStatusEnum["New"] = "new";
    TaskResponseAssigneeStatusEnum["Inbox"] = "inbox";
})(TaskResponseAssigneeStatusEnum = exports.TaskResponseAssigneeStatusEnum || (exports.TaskResponseAssigneeStatusEnum = {}));
// TaskResponseExternal
/**
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
var TaskResponseExternal = /** @class */ (function (_super) {
    __extends(TaskResponseExternal, _super);
    function TaskResponseExternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], TaskResponseExternal.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseExternal.prototype, "gid", void 0);
    return TaskResponseExternal;
}(utils_1.SpeakeasyBase));
exports.TaskResponseExternal = TaskResponseExternal;
var TaskResponseMemberships = /** @class */ (function (_super) {
    __extends(TaskResponseMemberships, _super);
    function TaskResponseMemberships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project" }),
        __metadata("design:type", projectcompact_1.ProjectCompact)
    ], TaskResponseMemberships.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=section" }),
        __metadata("design:type", sectioncompact_1.SectionCompact)
    ], TaskResponseMemberships.prototype, "section", void 0);
    return TaskResponseMemberships;
}(utils_1.SpeakeasyBase));
exports.TaskResponseMemberships = TaskResponseMemberships;
// TaskResponseParent
/**
 * The parent of this task, or `null` if this is not a subtask. This property cannot be modified using a PUT request but you can change it with the `setParent` endpoint. You can create subtasks by using the subtasks endpoint.
**/
var TaskResponseParent = /** @class */ (function (_super) {
    __extends(TaskResponseParent, _super);
    function TaskResponseParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseParent.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponseParent.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponseParent.prototype, "resourceType", void 0);
    return TaskResponseParent;
}(utils_1.SpeakeasyBase));
exports.TaskResponseParent = TaskResponseParent;
var TaskResponseResourceSubtypeEnum;
(function (TaskResponseResourceSubtypeEnum) {
    TaskResponseResourceSubtypeEnum["DefaultTask"] = "default_task";
    TaskResponseResourceSubtypeEnum["Milestone"] = "milestone";
    TaskResponseResourceSubtypeEnum["Section"] = "section";
    TaskResponseResourceSubtypeEnum["Approval"] = "approval";
})(TaskResponseResourceSubtypeEnum = exports.TaskResponseResourceSubtypeEnum || (exports.TaskResponseResourceSubtypeEnum = {}));
// TaskResponseWorkspace
/**
 * *Create-only*. The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
var TaskResponseWorkspace = /** @class */ (function (_super) {
    __extends(TaskResponseWorkspace, _super);
    function TaskResponseWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseWorkspace.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponseWorkspace.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponseWorkspace.prototype, "resourceType", void 0);
    return TaskResponseWorkspace;
}(utils_1.SpeakeasyBase));
exports.TaskResponseWorkspace = TaskResponseWorkspace;
// TaskResponse
/**
 * The *task* is the basic object around which many operations in Asana are centered.
**/
var TaskResponse = /** @class */ (function (_super) {
    __extends(TaskResponse, _super);
    function TaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_status" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "approvalStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee" }),
        __metadata("design:type", TaskResponseAssignee)
    ], TaskResponse.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee_section" }),
        __metadata("design:type", TaskResponseAssigneeSection)
    ], TaskResponse.prototype, "assigneeSection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee_status" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "assigneeStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed" }),
        __metadata("design:type", Boolean)
    ], TaskResponse.prototype, "completed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "completedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_by" }),
        __metadata("design:type", usercompact_1.UserCompact)
    ], TaskResponse.prototype, "completedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_fields", elemType: customfieldresponse_1.CustomFieldResponse }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dependencies", elemType: asanaresource_1.AsanaResource }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "dependencies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dependents", elemType: asanaresource_1.AsanaResource }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "dependents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_at" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "dueAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "dueOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external" }),
        __metadata("design:type", TaskResponseExternal)
    ], TaskResponse.prototype, "external", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers", elemType: usercompact_1.UserCompact }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "followers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hearted" }),
        __metadata("design:type", Boolean)
    ], TaskResponse.prototype, "hearted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hearts", elemType: like_1.Like }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "hearts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_notes" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "htmlNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_rendered_as_separator" }),
        __metadata("design:type", Boolean)
    ], TaskResponse.prototype, "isRenderedAsSeparator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], TaskResponse.prototype, "liked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likes", elemType: like_1.Like }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "likes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memberships", elemType: TaskResponseMemberships }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "memberships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_at" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "modifiedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_hearts" }),
        __metadata("design:type", Number)
    ], TaskResponse.prototype, "numHearts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_likes" }),
        __metadata("design:type", Number)
    ], TaskResponse.prototype, "numLikes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_subtasks" }),
        __metadata("design:type", Number)
    ], TaskResponse.prototype, "numSubtasks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent" }),
        __metadata("design:type", TaskResponseParent)
    ], TaskResponse.prototype, "parent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "permalinkUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projects", elemType: projectcompact_1.ProjectCompact }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "projects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "resourceSubtype", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_on" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "startOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tagcompact_1.TagCompact }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workspace" }),
        __metadata("design:type", TaskResponseWorkspace)
    ], TaskResponse.prototype, "workspace", void 0);
    return TaskResponse;
}(utils_1.SpeakeasyBase));
exports.TaskResponse = TaskResponse;
