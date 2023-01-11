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
exports.AssignmentSubmissionUpdate = exports.AssignmentSubmissionUpdateComments = void 0;
var utils_1 = require("../../../internal/utils");
var classattachmentcreation_1 = require("./classattachmentcreation");
var AssignmentSubmissionUpdateComments = /** @class */ (function (_super) {
    __extends(AssignmentSubmissionUpdateComments, _super);
    function AssignmentSubmissionUpdateComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], AssignmentSubmissionUpdateComments.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unread" }),
        __metadata("design:type", Number)
    ], AssignmentSubmissionUpdateComments.prototype, "unread", void 0);
    return AssignmentSubmissionUpdateComments;
}(utils_1.SpeakeasyBase));
exports.AssignmentSubmissionUpdateComments = AssignmentSubmissionUpdateComments;
// AssignmentSubmissionUpdate
/**
 * Assignment Submission creation
**/
var AssignmentSubmissionUpdate = /** @class */ (function (_super) {
    __extends(AssignmentSubmissionUpdate, _super);
    function AssignmentSubmissionUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachments", elemType: classattachmentcreation_1.ClassAttachmentCreation }),
        __metadata("design:type", Array)
    ], AssignmentSubmissionUpdate.prototype, "attachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", AssignmentSubmissionUpdateComments)
    ], AssignmentSubmissionUpdate.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=draftGrade" }),
        __metadata("design:type", Number)
    ], AssignmentSubmissionUpdate.prototype, "draftGrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grade" }),
        __metadata("design:type", Number)
    ], AssignmentSubmissionUpdate.prototype, "grade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=return" }),
        __metadata("design:type", Boolean)
    ], AssignmentSubmissionUpdate.prototype, "return", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submit" }),
        __metadata("design:type", Boolean)
    ], AssignmentSubmissionUpdate.prototype, "submit", void 0);
    return AssignmentSubmissionUpdate;
}(utils_1.SpeakeasyBase));
exports.AssignmentSubmissionUpdate = AssignmentSubmissionUpdate;
