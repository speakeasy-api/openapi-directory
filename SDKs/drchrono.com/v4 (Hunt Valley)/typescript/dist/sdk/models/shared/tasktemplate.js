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
exports.TaskTemplate = exports.TaskTemplateDefaultPriorityEnum = void 0;
var utils_1 = require("../../../internal/utils");
var TaskTemplateDefaultPriorityEnum;
(function (TaskTemplateDefaultPriorityEnum) {
    TaskTemplateDefaultPriorityEnum["Ten"] = "10";
    TaskTemplateDefaultPriorityEnum["Twenty"] = "20";
    TaskTemplateDefaultPriorityEnum["Thirty"] = "30";
    TaskTemplateDefaultPriorityEnum["Forty"] = "40";
})(TaskTemplateDefaultPriorityEnum = exports.TaskTemplateDefaultPriorityEnum || (exports.TaskTemplateDefaultPriorityEnum = {}));
var TaskTemplate = /** @class */ (function (_super) {
    __extends(TaskTemplate, _super);
    function TaskTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], TaskTemplate.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_assignee_group" }),
        __metadata("design:type", Number)
    ], TaskTemplate.prototype, "defaultAssigneeGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_assignee_user" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "defaultAssigneeUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_category" }),
        __metadata("design:type", Number)
    ], TaskTemplate.prototype, "defaultCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_due_date_offset" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "defaultDueDateOffset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_note" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "defaultNote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_priority" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "defaultPriority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_status" }),
        __metadata("design:type", Number)
    ], TaskTemplate.prototype, "defaultStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_title" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "defaultTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TaskTemplate.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=practice_group" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "practiceGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], TaskTemplate.prototype, "updatedAt", void 0);
    return TaskTemplate;
}(utils_1.SpeakeasyBase));
exports.TaskTemplate = TaskTemplate;
