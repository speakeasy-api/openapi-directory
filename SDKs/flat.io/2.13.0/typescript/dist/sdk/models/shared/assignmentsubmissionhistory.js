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
exports.AssignmentSubmissionHistory = exports.AssignmentSubmissionHistoryAttachment = void 0;
var utils_1 = require("../../../internal/utils");
var assignmentsubmissionstateenum_1 = require("./assignmentsubmissionstateenum");
var AssignmentSubmissionHistoryAttachment = /** @class */ (function (_super) {
    __extends(AssignmentSubmissionHistoryAttachment, _super);
    function AssignmentSubmissionHistoryAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], AssignmentSubmissionHistoryAttachment.prototype, "revision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=score" }),
        __metadata("design:type", String)
    ], AssignmentSubmissionHistoryAttachment.prototype, "score", void 0);
    return AssignmentSubmissionHistoryAttachment;
}(utils_1.SpeakeasyBase));
exports.AssignmentSubmissionHistoryAttachment = AssignmentSubmissionHistoryAttachment;
// AssignmentSubmissionHistory
/**
 * History item of the submission
**/
var AssignmentSubmissionHistory = /** @class */ (function (_super) {
    __extends(AssignmentSubmissionHistory, _super);
    function AssignmentSubmissionHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachment" }),
        __metadata("design:type", AssignmentSubmissionHistoryAttachment)
    ], AssignmentSubmissionHistory.prototype, "attachment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], AssignmentSubmissionHistory.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=draftGrade" }),
        __metadata("design:type", Number)
    ], AssignmentSubmissionHistory.prototype, "draftGrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grade" }),
        __metadata("design:type", Number)
    ], AssignmentSubmissionHistory.prototype, "grade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxPoints" }),
        __metadata("design:type", Number)
    ], AssignmentSubmissionHistory.prototype, "maxPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AssignmentSubmissionHistory.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], AssignmentSubmissionHistory.prototype, "users", void 0);
    return AssignmentSubmissionHistory;
}(utils_1.SpeakeasyBase));
exports.AssignmentSubmissionHistory = AssignmentSubmissionHistory;
