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
exports.Episode = exports.EpisodeRelationships = exports.EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes = exports.EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes = exports.EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo = exports.EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode = exports.EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo = exports.EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason = exports.EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode = exports.EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints = exports.EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode = exports.EpisodeRelationshipsCoverImage = exports.EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode = exports.EpisodeRelationshipsCascadedCoverImage = exports.EpisodeAttributes = exports.EpisodeAttributesStatusEnum = exports.EpisodeAttributesPremiumStatusEnum = exports.EpisodeAttributesItunesTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var resourceidentifier_1 = require("./resourceidentifier");
var EpisodeAttributesItunesTypeEnum;
(function (EpisodeAttributesItunesTypeEnum) {
    EpisodeAttributesItunesTypeEnum["Full"] = "full";
    EpisodeAttributesItunesTypeEnum["Bonus"] = "bonus";
    EpisodeAttributesItunesTypeEnum["Trailer"] = "trailer";
})(EpisodeAttributesItunesTypeEnum = exports.EpisodeAttributesItunesTypeEnum || (exports.EpisodeAttributesItunesTypeEnum = {}));
var EpisodeAttributesPremiumStatusEnum;
(function (EpisodeAttributesPremiumStatusEnum) {
    EpisodeAttributesPremiumStatusEnum["Active"] = "active";
    EpisodeAttributesPremiumStatusEnum["Inactive"] = "inactive";
    EpisodeAttributesPremiumStatusEnum["ForceActive"] = "force-active";
    EpisodeAttributesPremiumStatusEnum["ForceInactive"] = "force-inactive";
})(EpisodeAttributesPremiumStatusEnum = exports.EpisodeAttributesPremiumStatusEnum || (exports.EpisodeAttributesPremiumStatusEnum = {}));
var EpisodeAttributesStatusEnum;
(function (EpisodeAttributesStatusEnum) {
    EpisodeAttributesStatusEnum["Active"] = "active";
    EpisodeAttributesStatusEnum["Inactive"] = "inactive";
})(EpisodeAttributesStatusEnum = exports.EpisodeAttributesStatusEnum || (exports.EpisodeAttributesStatusEnum = {}));
var EpisodeAttributes = /** @class */ (function (_super) {
    __extends(EpisodeAttributes, _super);
    function EpisodeAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_user_comments" }),
        __metadata("design:type", Boolean)
    ], EpisodeAttributes.prototype, "allowUserComments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cascaded_cover_image_id" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "cascadedCoverImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover_image_id" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "coverImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], EpisodeAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description_is_html" }),
        __metadata("design:type", Boolean)
    ], EpisodeAttributes.prototype, "descriptionIsHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description_plain" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "descriptionPlain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_name" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "fileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itunes_type" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "itunesType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listen_count" }),
        __metadata("design:type", Number)
    ], EpisodeAttributes.prototype, "listenCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premium_status" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "premiumStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published" }),
        __metadata("design:type", Boolean)
    ], EpisodeAttributes.prototype, "published", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_immediately" }),
        __metadata("design:type", Boolean)
    ], EpisodeAttributes.prototype, "releaseImmediately", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=released_at" }),
        __metadata("design:type", Date)
    ], EpisodeAttributes.prototype, "releasedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rss_guid" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "rssGuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=season_id" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "seasonId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series_id" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "seriesId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sort_title" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "sortTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EpisodeAttributes.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], EpisodeAttributes.prototype, "updatedAt", void 0);
    return EpisodeAttributes;
}(utils_1.SpeakeasyBase));
exports.EpisodeAttributes = EpisodeAttributes;
// EpisodeRelationshipsCascadedCoverImage
/**
 * The cover art for this episode. This is the preferred image to use.
 * If there is no specific cover image for the episode, the cover of the season or the
 * series will be returned, whichever has one defined.
 * The `/images` endpoint provides details to the image.
 *
**/
var EpisodeRelationshipsCascadedCoverImage = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsCascadedCoverImage, _super);
    function EpisodeRelationshipsCascadedCoverImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], EpisodeRelationshipsCascadedCoverImage.prototype, "data", void 0);
    return EpisodeRelationshipsCascadedCoverImage;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsCascadedCoverImage = EpisodeRelationshipsCascadedCoverImage;
var EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode, _super);
    function EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode.prototype, "data", void 0);
    return EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode = EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode;
// EpisodeRelationshipsCoverImage
/**
 * The cover art for this episode, if an episode-specific image has been provided.
 * The `/images` endpoint provideds details to the image.
 *
**/
var EpisodeRelationshipsCoverImage = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsCoverImage, _super);
    function EpisodeRelationshipsCoverImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], EpisodeRelationshipsCoverImage.prototype, "data", void 0);
    return EpisodeRelationshipsCoverImage;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsCoverImage = EpisodeRelationshipsCoverImage;
var EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode, _super);
    function EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode.prototype, "data", void 0);
    return EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode = EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode;
// EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints
/**
 * Only visible if the credential has write privileges on the series
**/
var EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints, _super);
    function EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints.prototype, "data", void 0);
    return EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints = EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints;
// EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode
/**
 * Only visible if the credential has write privileges on the series
**/
var EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode, _super);
    function EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode.prototype, "data", void 0);
    return EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode = EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode;
var EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason, _super);
    function EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason.prototype, "data", void 0);
    return EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason = EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason;
var EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo, _super);
    function EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo.prototype, "data", void 0);
    return EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo = EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo;
// EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode
/**
 * Only visible if the credential has write privileges on the series
**/
var EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode, _super);
    function EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode.prototype, "data", void 0);
    return EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode = EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode;
var EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo, _super);
    function EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo.prototype, "data", void 0);
    return EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo = EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo;
var EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes, _super);
    function EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes.prototype, "data", void 0);
    return EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes = EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes;
var EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes = /** @class */ (function (_super) {
    __extends(EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes, _super);
    function EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes.prototype, "data", void 0);
    return EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes = EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes;
var EpisodeRelationships = /** @class */ (function (_super) {
    __extends(EpisodeRelationships, _super);
    function EpisodeRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cascaded_cover_image" }),
        __metadata("design:type", EpisodeRelationshipsCascadedCoverImage)
    ], EpisodeRelationships.prototype, "cascadedCoverImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification_inclusions" }),
        __metadata("design:type", EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode)
    ], EpisodeRelationships.prototype, "classificationInclusions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover_image" }),
        __metadata("design:type", EpisodeRelationshipsCoverImage)
    ], EpisodeRelationships.prototype, "coverImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credits" }),
        __metadata("design:type", EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode)
    ], EpisodeRelationships.prototype, "credits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_marker_points" }),
        __metadata("design:type", EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints)
    ], EpisodeRelationships.prototype, "defaultMarkerPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=episode_versions" }),
        __metadata("design:type", EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode)
    ], EpisodeRelationships.prototype, "episodeVersions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images" }),
        __metadata("design:type", EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason)
    ], EpisodeRelationships.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=season" }),
        __metadata("design:type", EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo)
    ], EpisodeRelationships.prototype, "season", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=segment_lists" }),
        __metadata("design:type", EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode)
    ], EpisodeRelationships.prototype, "segmentLists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series" }),
        __metadata("design:type", EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo)
    ], EpisodeRelationships.prototype, "series", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taggings" }),
        __metadata("design:type", EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes)
    ], EpisodeRelationships.prototype, "taggings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes)
    ], EpisodeRelationships.prototype, "tags", void 0);
    return EpisodeRelationships;
}(utils_1.SpeakeasyBase));
exports.EpisodeRelationships = EpisodeRelationships;
var Episode = /** @class */ (function (_super) {
    __extends(Episode, _super);
    function Episode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", EpisodeAttributes)
    ], Episode.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Episode.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", EpisodeRelationships)
    ], Episode.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Episode.prototype, "type", void 0);
    return Episode;
}(utils_1.SpeakeasyBase));
exports.Episode = Episode;
