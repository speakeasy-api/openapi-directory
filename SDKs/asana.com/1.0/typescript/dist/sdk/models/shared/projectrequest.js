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
exports.ProjectRequestInput = exports.ProjectRequestWorkspaceInput = exports.ProjectRequestDefaultViewEnum = exports.ProjectRequestCurrentStatusInput = exports.ProjectRequestCurrentStatusColorEnum = exports.ProjectRequestColorEnum = void 0;
var utils_1 = require("../../../internal/utils");
var usercompact_1 = require("./usercompact");
var ProjectRequestColorEnum;
(function (ProjectRequestColorEnum) {
    ProjectRequestColorEnum["DarkPink"] = "dark-pink";
    ProjectRequestColorEnum["DarkGreen"] = "dark-green";
    ProjectRequestColorEnum["DarkBlue"] = "dark-blue";
    ProjectRequestColorEnum["DarkRed"] = "dark-red";
    ProjectRequestColorEnum["DarkTeal"] = "dark-teal";
    ProjectRequestColorEnum["DarkBrown"] = "dark-brown";
    ProjectRequestColorEnum["DarkOrange"] = "dark-orange";
    ProjectRequestColorEnum["DarkPurple"] = "dark-purple";
    ProjectRequestColorEnum["DarkWarmGray"] = "dark-warm-gray";
    ProjectRequestColorEnum["LightPink"] = "light-pink";
    ProjectRequestColorEnum["LightGreen"] = "light-green";
    ProjectRequestColorEnum["LightBlue"] = "light-blue";
    ProjectRequestColorEnum["LightRed"] = "light-red";
    ProjectRequestColorEnum["LightTeal"] = "light-teal";
    ProjectRequestColorEnum["LightBrown"] = "light-brown";
    ProjectRequestColorEnum["LightOrange"] = "light-orange";
    ProjectRequestColorEnum["LightPurple"] = "light-purple";
    ProjectRequestColorEnum["LightWarmGray"] = "light-warm-gray";
})(ProjectRequestColorEnum = exports.ProjectRequestColorEnum || (exports.ProjectRequestColorEnum = {}));
var ProjectRequestCurrentStatusColorEnum;
(function (ProjectRequestCurrentStatusColorEnum) {
    ProjectRequestCurrentStatusColorEnum["Green"] = "green";
    ProjectRequestCurrentStatusColorEnum["Yellow"] = "yellow";
    ProjectRequestCurrentStatusColorEnum["Red"] = "red";
    ProjectRequestCurrentStatusColorEnum["Blue"] = "blue";
})(ProjectRequestCurrentStatusColorEnum = exports.ProjectRequestCurrentStatusColorEnum || (exports.ProjectRequestCurrentStatusColorEnum = {}));
// ProjectRequestCurrentStatusInput
/**
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
var ProjectRequestCurrentStatusInput = /** @class */ (function (_super) {
    __extends(ProjectRequestCurrentStatusInput, _super);
    function ProjectRequestCurrentStatusInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author" }),
        __metadata("design:type", usercompact_1.UserCompactInput)
    ], ProjectRequestCurrentStatusInput.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], ProjectRequestCurrentStatusInput.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", usercompact_1.UserCompactInput)
    ], ProjectRequestCurrentStatusInput.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_text" }),
        __metadata("design:type", String)
    ], ProjectRequestCurrentStatusInput.prototype, "htmlText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], ProjectRequestCurrentStatusInput.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProjectRequestCurrentStatusInput.prototype, "title", void 0);
    return ProjectRequestCurrentStatusInput;
}(utils_1.SpeakeasyBase));
exports.ProjectRequestCurrentStatusInput = ProjectRequestCurrentStatusInput;
var ProjectRequestDefaultViewEnum;
(function (ProjectRequestDefaultViewEnum) {
    ProjectRequestDefaultViewEnum["List"] = "list";
    ProjectRequestDefaultViewEnum["Board"] = "board";
    ProjectRequestDefaultViewEnum["Calendar"] = "calendar";
    ProjectRequestDefaultViewEnum["Timeline"] = "timeline";
})(ProjectRequestDefaultViewEnum = exports.ProjectRequestDefaultViewEnum || (exports.ProjectRequestDefaultViewEnum = {}));
// ProjectRequestWorkspaceInput
/**
 * *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
var ProjectRequestWorkspaceInput = /** @class */ (function (_super) {
    __extends(ProjectRequestWorkspaceInput, _super);
    function ProjectRequestWorkspaceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectRequestWorkspaceInput.prototype, "name", void 0);
    return ProjectRequestWorkspaceInput;
}(utils_1.SpeakeasyBase));
exports.ProjectRequestWorkspaceInput = ProjectRequestWorkspaceInput;
// ProjectRequestInput
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
**/
var ProjectRequestInput = /** @class */ (function (_super) {
    __extends(ProjectRequestInput, _super);
    function ProjectRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], ProjectRequestInput.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_status" }),
        __metadata("design:type", ProjectRequestCurrentStatusInput)
    ], ProjectRequestInput.prototype, "currentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_fields" }),
        __metadata("design:type", Object)
    ], ProjectRequestInput.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_view" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "defaultView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], ProjectRequestInput.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], ProjectRequestInput.prototype, "dueOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "followers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_notes" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "htmlNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], ProjectRequestInput.prototype, "isTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ProjectRequestInput.prototype, "public", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_on" }),
        __metadata("design:type", Date)
    ], ProjectRequestInput.prototype, "startOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "team", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workspace" }),
        __metadata("design:type", ProjectRequestWorkspaceInput)
    ], ProjectRequestInput.prototype, "workspace", void 0);
    return ProjectRequestInput;
}(utils_1.SpeakeasyBase));
exports.ProjectRequestInput = ProjectRequestInput;
