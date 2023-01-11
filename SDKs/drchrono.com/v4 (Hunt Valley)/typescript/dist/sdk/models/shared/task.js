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
exports.Task = exports.TaskPriorityEnum = exports.TaskTaskNote = exports.TaskTaskReminder = exports.TaskAssociatedTaskItem = exports.TaskAssociatedTaskItemTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var TaskAssociatedTaskItemTypeEnum;
(function (TaskAssociatedTaskItemTypeEnum) {
    TaskAssociatedTaskItemTypeEnum["Patient"] = "Patient";
    TaskAssociatedTaskItemTypeEnum["Appointment"] = "Appointment";
    TaskAssociatedTaskItemTypeEnum["LabOrder"] = "Lab order";
    TaskAssociatedTaskItemTypeEnum["Document"] = "Document";
    TaskAssociatedTaskItemTypeEnum["Message"] = "Message";
    TaskAssociatedTaskItemTypeEnum["LabDocument"] = "Lab document";
    TaskAssociatedTaskItemTypeEnum["LabResult"] = "Lab result";
    TaskAssociatedTaskItemTypeEnum["Communication"] = "Communication";
})(TaskAssociatedTaskItemTypeEnum = exports.TaskAssociatedTaskItemTypeEnum || (exports.TaskAssociatedTaskItemTypeEnum = {}));
var TaskAssociatedTaskItem = /** @class */ (function (_super) {
    __extends(TaskAssociatedTaskItem, _super);
    function TaskAssociatedTaskItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=task" }),
        __metadata("design:type", Number)
    ], TaskAssociatedTaskItem.prototype, "task", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TaskAssociatedTaskItem.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], TaskAssociatedTaskItem.prototype, "value", void 0);
    return TaskAssociatedTaskItem;
}(utils_1.SpeakeasyBase));
exports.TaskAssociatedTaskItem = TaskAssociatedTaskItem;
// TaskTaskReminder
/**
 * When the task is due
**/
var TaskTaskReminder = /** @class */ (function (_super) {
    __extends(TaskTaskReminder, _super);
    function TaskTaskReminder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], TaskTaskReminder.prototype, "time", void 0);
    return TaskTaskReminder;
}(utils_1.SpeakeasyBase));
exports.TaskTaskReminder = TaskTaskReminder;
// TaskTaskNote
/**
 * Task note object
**/
var TaskTaskNote = /** @class */ (function (_super) {
    __extends(TaskTaskNote, _super);
    function TaskTaskNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], TaskTaskNote.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], TaskTaskNote.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], TaskTaskNote.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TaskTaskNote.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=task" }),
        __metadata("design:type", Number)
    ], TaskTaskNote.prototype, "task", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], TaskTaskNote.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], TaskTaskNote.prototype, "updatedAt", void 0);
    return TaskTaskNote;
}(utils_1.SpeakeasyBase));
exports.TaskTaskNote = TaskTaskNote;
var TaskPriorityEnum;
(function (TaskPriorityEnum) {
    TaskPriorityEnum["Ten"] = "10";
    TaskPriorityEnum["Twenty"] = "20";
    TaskPriorityEnum["Thirty"] = "30";
    TaskPriorityEnum["Forty"] = "40";
})(TaskPriorityEnum = exports.TaskPriorityEnum || (exports.TaskPriorityEnum = {}));
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Task.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigned_by" }),
        __metadata("design:type", String)
    ], Task.prototype, "assignedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee_group" }),
        __metadata("design:type", Number)
    ], Task.prototype, "assigneeGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee_user" }),
        __metadata("design:type", String)
    ], Task.prototype, "assigneeUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associated_items", elemType: TaskAssociatedTaskItem }),
        __metadata("design:type", Array)
    ], Task.prototype, "associatedItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", Number)
    ], Task.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], Task.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Task.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_date" }),
        __metadata("design:type", TaskTaskReminder)
    ], Task.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Task.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes", elemType: TaskTaskNote }),
        __metadata("design:type", Array)
    ], Task.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], Task.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], Task.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Task.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], Task.prototype, "updatedAt", void 0);
    return Task;
}(utils_1.SpeakeasyBase));
exports.Task = Task;
