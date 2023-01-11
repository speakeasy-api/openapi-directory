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
exports.AssignmentSubmission = void 0;
var utils_1 = require("../../../internal/utils");
var mediaattachment_1 = require("./mediaattachment");
var googleclassroomsubmission_1 = require("./googleclassroomsubmission");
var microsoftgraphsubmission_1 = require("./microsoftgraphsubmission");
var assignmentsubmissionstateenum_1 = require("./assignmentsubmissionstateenum");
// AssignmentSubmission
/**
 * Assignment Submission
**/
var AssignmentSubmission = /** @class */ (function (_super) {
    __extends(AssignmentSubmission, _super);
    function AssignmentSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignment" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "assignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachments", elemType: mediaattachment_1.MediaAttachment }),
        __metadata("design:type", Array)
    ], AssignmentSubmission.prototype, "attachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classroom" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "classroom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "creationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "creator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=draftGrade" }),
        __metadata("design:type", Number)
    ], AssignmentSubmission.prototype, "draftGrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleClassroom" }),
        __metadata("design:type", googleclassroomsubmission_1.GoogleClassroomSubmission)
    ], AssignmentSubmission.prototype, "googleClassroom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grade" }),
        __metadata("design:type", Number)
    ], AssignmentSubmission.prototype, "grade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxPoints" }),
        __metadata("design:type", Number)
    ], AssignmentSubmission.prototype, "maxPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microsoftGraph" }),
        __metadata("design:type", microsoftgraphsubmission_1.MicrosoftGraphSubmission)
    ], AssignmentSubmission.prototype, "microsoftGraph", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=returnCreator" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "returnCreator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=returnDate" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "returnDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submissionDate" }),
        __metadata("design:type", String)
    ], AssignmentSubmission.prototype, "submissionDate", void 0);
    return AssignmentSubmission;
}(utils_1.SpeakeasyBase));
exports.AssignmentSubmission = AssignmentSubmission;
