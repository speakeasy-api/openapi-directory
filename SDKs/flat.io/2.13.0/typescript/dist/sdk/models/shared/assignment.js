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
exports.Assignment = exports.AssignmentStateEnum = exports.AssignmentMfc = exports.AssignmentLti = exports.AssignmentCanvas = void 0;
var utils_1 = require("../../../internal/utils");
var mediaattachment_1 = require("./mediaattachment");
var googleclassroomcoursework_1 = require("./googleclassroomcoursework");
var microsoftgraphassignment_1 = require("./microsoftgraphassignment");
var assignmentsubmission_1 = require("./assignmentsubmission");
var assignmenttypeenum_1 = require("./assignmenttypeenum");
// AssignmentCanvas
/**
 * A Canvas LMS assignment
**/
var AssignmentCanvas = /** @class */ (function (_super) {
    __extends(AssignmentCanvas, _super);
    function AssignmentCanvas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternateLink" }),
        __metadata("design:type", String)
    ], AssignmentCanvas.prototype, "alternateLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignmentCanvas.prototype, "id", void 0);
    return AssignmentCanvas;
}(utils_1.SpeakeasyBase));
exports.AssignmentCanvas = AssignmentCanvas;
// AssignmentLti
/**
 * An LTI assignment
**/
var AssignmentLti = /** @class */ (function (_super) {
    __extends(AssignmentLti, _super);
    function AssignmentLti() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignmentLti.prototype, "id", void 0);
    return AssignmentLti;
}(utils_1.SpeakeasyBase));
exports.AssignmentLti = AssignmentLti;
// AssignmentMfc
/**
 * A MusicFirst Classroom assignment
**/
var AssignmentMfc = /** @class */ (function (_super) {
    __extends(AssignmentMfc, _super);
    function AssignmentMfc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternateLink" }),
        __metadata("design:type", String)
    ], AssignmentMfc.prototype, "alternateLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignmentMfc.prototype, "id", void 0);
    return AssignmentMfc;
}(utils_1.SpeakeasyBase));
exports.AssignmentMfc = AssignmentMfc;
var AssignmentStateEnum;
(function (AssignmentStateEnum) {
    AssignmentStateEnum["Draft"] = "draft";
    AssignmentStateEnum["Active"] = "active";
    AssignmentStateEnum["Archived"] = "archived";
})(AssignmentStateEnum = exports.AssignmentStateEnum || (exports.AssignmentStateEnum = {}));
// Assignment
/**
 * Assignment details
**/
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachments", elemType: mediaattachment_1.MediaAttachment }),
        __metadata("design:type", Array)
    ], Assignment.prototype, "attachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canvas" }),
        __metadata("design:type", AssignmentCanvas)
    ], Assignment.prototype, "canvas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classroom" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "classroom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "cover", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverFile" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "coverFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "creationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "creator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueDate" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleClassroom" }),
        __metadata("design:type", googleclassroomcoursework_1.GoogleClassroomCoursework)
    ], Assignment.prototype, "googleClassroom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lti" }),
        __metadata("design:type", AssignmentLti)
    ], Assignment.prototype, "lti", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxPoints" }),
        __metadata("design:type", Number)
    ], Assignment.prototype, "maxPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mfc" }),
        __metadata("design:type", AssignmentMfc)
    ], Assignment.prototype, "mfc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microsoftGraph" }),
        __metadata("design:type", microsoftgraphassignment_1.MicrosoftGraphAssignment)
    ], Assignment.prototype, "microsoftGraph", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduledDate" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "scheduledDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submissions", elemType: assignmentsubmission_1.AssignmentSubmission }),
        __metadata("design:type", Array)
    ], Assignment.prototype, "submissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "type", void 0);
    return Assignment;
}(utils_1.SpeakeasyBase));
exports.Assignment = Assignment;
