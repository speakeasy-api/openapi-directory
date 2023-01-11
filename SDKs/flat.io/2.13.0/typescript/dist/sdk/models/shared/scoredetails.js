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
exports.ScoreDetails = void 0;
var utils_1 = require("../../../internal/utils");
var resourcecollaborator_1 = require("./resourcecollaborator");
var scorecommentscounts_1 = require("./scorecommentscounts");
var scorecreationtypeenum_1 = require("./scorecreationtypeenum");
var scorelicenseenum_1 = require("./scorelicenseenum");
var scorelikescounts_1 = require("./scorelikescounts");
var scoreplayscounts_1 = require("./scoreplayscounts");
var scoreprivacyenum_1 = require("./scoreprivacyenum");
var resourcerights_1 = require("./resourcerights");
var userpublicsummary_1 = require("./userpublicsummary");
var scoreviewscounts_1 = require("./scoreviewscounts");
// ScoreDetails
/**
 * A summary of the score details
**/
var ScoreDetails = /** @class */ (function (_super) {
    __extends(ScoreDetails, _super);
    function ScoreDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arranger" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "arranger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collaborators", elemType: resourcecollaborator_1.ResourceCollaborator }),
        __metadata("design:type", Array)
    ], ScoreDetails.prototype, "collaborators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collections" }),
        __metadata("design:type", Array)
    ], ScoreDetails.prototype, "collections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", scorecommentscounts_1.ScoreCommentsCounts)
    ], ScoreDetails.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=composer" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "composer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], ScoreDetails.prototype, "creationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationType" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "creationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=durationTime" }),
        __metadata("design:type", Number)
    ], ScoreDetails.prototype, "durationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleDriveFileId" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "googleDriveFileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlUrl" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instruments" }),
        __metadata("design:type", Array)
    ], ScoreDetails.prototype, "instruments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=licenseText" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "licenseText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likes" }),
        __metadata("design:type", scorelikescounts_1.ScoreLikesCounts)
    ], ScoreDetails.prototype, "likes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lyricist" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "lyricist", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mainTempoQpm" }),
        __metadata("design:type", Number)
    ], ScoreDetails.prototype, "mainTempoQpm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modificationDate" }),
        __metadata("design:type", Date)
    ], ScoreDetails.prototype, "modificationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberMeasures" }),
        __metadata("design:type", Number)
    ], ScoreDetails.prototype, "numberMeasures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "organization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentScore" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "parentScore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plays" }),
        __metadata("design:type", scoreplayscounts_1.ScorePlaysCounts)
    ], ScoreDetails.prototype, "plays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "privacy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publicationDate" }),
        __metadata("design:type", Date)
    ], ScoreDetails.prototype, "publicationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rights" }),
        __metadata("design:type", resourcerights_1.ResourceRights)
    ], ScoreDetails.prototype, "rights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=samples" }),
        __metadata("design:type", Array)
    ], ScoreDetails.prototype, "samples", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharingKey" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "sharingKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subtitle" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "subtitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ScoreDetails.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ScoreDetails.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", userpublicsummary_1.UserPublicSummary)
    ], ScoreDetails.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=views" }),
        __metadata("design:type", scoreviewscounts_1.ScoreViewsCounts)
    ], ScoreDetails.prototype, "views", void 0);
    return ScoreDetails;
}(utils_1.SpeakeasyBase));
exports.ScoreDetails = ScoreDetails;
