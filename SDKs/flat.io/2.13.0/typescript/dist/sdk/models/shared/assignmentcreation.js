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
exports.AssignmentCreation = exports.AssignmentCreationStateEnum = exports.AssignmentCreationMicrosoftGraph = exports.AssignmentCreationGoogleClassroom = exports.AssignmentCreationAssigneeModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var classattachmentcreation_1 = require("./classattachmentcreation");
var assignmenttypeenum_1 = require("./assignmenttypeenum");
var AssignmentCreationAssigneeModeEnum;
(function (AssignmentCreationAssigneeModeEnum) {
    AssignmentCreationAssigneeModeEnum["Everyone"] = "everyone";
    AssignmentCreationAssigneeModeEnum["Selected"] = "selected";
})(AssignmentCreationAssigneeModeEnum = exports.AssignmentCreationAssigneeModeEnum || (exports.AssignmentCreationAssigneeModeEnum = {}));
// AssignmentCreationGoogleClassroom
/**
 * Google Classroom options for this assignment
**/
var AssignmentCreationGoogleClassroom = /** @class */ (function (_super) {
    __extends(AssignmentCreationGoogleClassroom, _super);
    function AssignmentCreationGoogleClassroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topicId" }),
        __metadata("design:type", String)
    ], AssignmentCreationGoogleClassroom.prototype, "topicId", void 0);
    return AssignmentCreationGoogleClassroom;
}(utils_1.SpeakeasyBase));
exports.AssignmentCreationGoogleClassroom = AssignmentCreationGoogleClassroom;
// AssignmentCreationMicrosoftGraph
/**
 * Microsoft Graph options for this assignment
**/
var AssignmentCreationMicrosoftGraph = /** @class */ (function (_super) {
    __extends(AssignmentCreationMicrosoftGraph, _super);
    function AssignmentCreationMicrosoftGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], AssignmentCreationMicrosoftGraph.prototype, "categories", void 0);
    return AssignmentCreationMicrosoftGraph;
}(utils_1.SpeakeasyBase));
exports.AssignmentCreationMicrosoftGraph = AssignmentCreationMicrosoftGraph;
var AssignmentCreationStateEnum;
(function (AssignmentCreationStateEnum) {
    AssignmentCreationStateEnum["Draft"] = "draft";
    AssignmentCreationStateEnum["Active"] = "active";
})(AssignmentCreationStateEnum = exports.AssignmentCreationStateEnum || (exports.AssignmentCreationStateEnum = {}));
// AssignmentCreation
/**
 * Assignment creation details
**/
var AssignmentCreation = /** @class */ (function (_super) {
    __extends(AssignmentCreation, _super);
    function AssignmentCreation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignedStudents" }),
        __metadata("design:type", Array)
    ], AssignmentCreation.prototype, "assignedStudents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigneeMode" }),
        __metadata("design:type", String)
    ], AssignmentCreation.prototype, "assigneeMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachments", elemType: classattachmentcreation_1.ClassAttachmentCreation }),
        __metadata("design:type", Array)
    ], AssignmentCreation.prototype, "attachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover" }),
        __metadata("design:type", String)
    ], AssignmentCreation.prototype, "cover", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverFile" }),
        __metadata("design:type", String)
    ], AssignmentCreation.prototype, "coverFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AssignmentCreation.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueDate" }),
        __metadata("design:type", Date)
    ], AssignmentCreation.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleClassroom" }),
        __metadata("design:type", AssignmentCreationGoogleClassroom)
    ], AssignmentCreation.prototype, "googleClassroom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxPoints" }),
        __metadata("design:type", Number)
    ], AssignmentCreation.prototype, "maxPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microsoftGraph" }),
        __metadata("design:type", AssignmentCreationMicrosoftGraph)
    ], AssignmentCreation.prototype, "microsoftGraph", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nbPlaybackAuthorized" }),
        __metadata("design:type", Number)
    ], AssignmentCreation.prototype, "nbPlaybackAuthorized", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduledDate" }),
        __metadata("design:type", Date)
    ], AssignmentCreation.prototype, "scheduledDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AssignmentCreation.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AssignmentCreation.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toolset" }),
        __metadata("design:type", String)
    ], AssignmentCreation.prototype, "toolset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AssignmentCreation.prototype, "type", void 0);
    return AssignmentCreation;
}(utils_1.SpeakeasyBase));
exports.AssignmentCreation = AssignmentCreation;
