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
exports.Series = exports.SeriesRelationships = exports.SeriesRelationshipsAListOfTagsAssociatedWithTheSeries = exports.SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries = exports.SeriesRelationshipsAListOfSeasonsInTheSeries = exports.SeriesRelationshipsTheNetworkTheSeriesBelongsTo = exports.SeriesRelationshipsTheCoverImageForTheSeries = exports.SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile = exports.SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries = exports.SeriesRelationshipsCoverImage = exports.SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries = exports.SeriesAttributes = exports.SeriesAttributesTypeEnum = exports.SeriesAttributesStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var resourceidentifier_1 = require("./resourceidentifier");
var SeriesAttributesStatusEnum;
(function (SeriesAttributesStatusEnum) {
    SeriesAttributesStatusEnum["Active"] = "active";
    SeriesAttributesStatusEnum["Inactive"] = "inactive";
})(SeriesAttributesStatusEnum = exports.SeriesAttributesStatusEnum || (exports.SeriesAttributesStatusEnum = {}));
var SeriesAttributesTypeEnum;
(function (SeriesAttributesTypeEnum) {
    SeriesAttributesTypeEnum["Series"] = "Series";
})(SeriesAttributesTypeEnum = exports.SeriesAttributesTypeEnum || (exports.SeriesAttributesTypeEnum = {}));
var SeriesAttributes = /** @class */ (function (_super) {
    __extends(SeriesAttributes, _super);
    function SeriesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amazon_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "amazonSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=castbox_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "castboxSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover_image_id" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "coverImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], SeriesAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description_is_html" }),
        __metadata("design:type", Boolean)
    ], SeriesAttributes.prototype, "descriptionIsHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description_plain" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "descriptionPlain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=facebook_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "facebookUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "googleSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iheart_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "iheartSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instagram_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "instagramUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itunes_subscription_badge_enabled" }),
        __metadata("design:type", Boolean)
    ], SeriesAttributes.prototype, "itunesSubscriptionBadgeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itunes_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "itunesSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=linkedin_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "linkedinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pocket_casts_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "pocketCastsSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=podcast_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "podcastSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_page_enabled" }),
        __metadata("design:type", Boolean)
    ], SeriesAttributes.prototype, "publicPageEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_title" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "publicTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=radio_public_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "radioPublicSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rss_author" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "rssAuthor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rss_copyright" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "rssCopyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rss_email" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "rssEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rss_owner" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "rssOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "slug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sort_title" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "sortTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spotify_subscription_badge_enabled" }),
        __metadata("design:type", Boolean)
    ], SeriesAttributes.prototype, "spotifySubscriptionBadgeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spotify_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "spotifySubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stitcher_subscription_badge_enabled" }),
        __metadata("design:type", Boolean)
    ], SeriesAttributes.prototype, "stitcherSubscriptionBadgeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stitcher_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "stitcherSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tumblr_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "tumblrUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tune_in_subscription_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "tuneInSubscriptionUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=twitter_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "twitterUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], SeriesAttributes.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website_url" }),
        __metadata("design:type", String)
    ], SeriesAttributes.prototype, "websiteUrl", void 0);
    return SeriesAttributes;
}(utils_1.SpeakeasyBase));
exports.SeriesAttributes = SeriesAttributes;
var SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries, _super);
    function SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries.prototype, "data", void 0);
    return SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries = SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries;
// SeriesRelationshipsCoverImage
/**
 * The cover image for the series
**/
var SeriesRelationshipsCoverImage = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsCoverImage, _super);
    function SeriesRelationshipsCoverImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], SeriesRelationshipsCoverImage.prototype, "data", void 0);
    return SeriesRelationshipsCoverImage;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsCoverImage = SeriesRelationshipsCoverImage;
var SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries, _super);
    function SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries.prototype, "data", void 0);
    return SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries = SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries;
var SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile, _super);
    function SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile.prototype, "data", void 0);
    return SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile = SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile;
var SeriesRelationshipsTheCoverImageForTheSeries = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsTheCoverImageForTheSeries, _super);
    function SeriesRelationshipsTheCoverImageForTheSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], SeriesRelationshipsTheCoverImageForTheSeries.prototype, "data", void 0);
    return SeriesRelationshipsTheCoverImageForTheSeries;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsTheCoverImageForTheSeries = SeriesRelationshipsTheCoverImageForTheSeries;
var SeriesRelationshipsTheNetworkTheSeriesBelongsTo = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsTheNetworkTheSeriesBelongsTo, _super);
    function SeriesRelationshipsTheNetworkTheSeriesBelongsTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], SeriesRelationshipsTheNetworkTheSeriesBelongsTo.prototype, "data", void 0);
    return SeriesRelationshipsTheNetworkTheSeriesBelongsTo;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsTheNetworkTheSeriesBelongsTo = SeriesRelationshipsTheNetworkTheSeriesBelongsTo;
var SeriesRelationshipsAListOfSeasonsInTheSeries = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsAListOfSeasonsInTheSeries, _super);
    function SeriesRelationshipsAListOfSeasonsInTheSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], SeriesRelationshipsAListOfSeasonsInTheSeries.prototype, "data", void 0);
    return SeriesRelationshipsAListOfSeasonsInTheSeries;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsAListOfSeasonsInTheSeries = SeriesRelationshipsAListOfSeasonsInTheSeries;
var SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries, _super);
    function SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries.prototype, "data", void 0);
    return SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries = SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries;
var SeriesRelationshipsAListOfTagsAssociatedWithTheSeries = /** @class */ (function (_super) {
    __extends(SeriesRelationshipsAListOfTagsAssociatedWithTheSeries, _super);
    function SeriesRelationshipsAListOfTagsAssociatedWithTheSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], SeriesRelationshipsAListOfTagsAssociatedWithTheSeries.prototype, "data", void 0);
    return SeriesRelationshipsAListOfTagsAssociatedWithTheSeries;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationshipsAListOfTagsAssociatedWithTheSeries = SeriesRelationshipsAListOfTagsAssociatedWithTheSeries;
var SeriesRelationships = /** @class */ (function (_super) {
    __extends(SeriesRelationships, _super);
    function SeriesRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification_inclusions" }),
        __metadata("design:type", SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries)
    ], SeriesRelationships.prototype, "classificationInclusions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover_image" }),
        __metadata("design:type", SeriesRelationshipsCoverImage)
    ], SeriesRelationships.prototype, "coverImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credits" }),
        __metadata("design:type", SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries)
    ], SeriesRelationships.prototype, "credits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=episodes" }),
        __metadata("design:type", SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile)
    ], SeriesRelationships.prototype, "episodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images" }),
        __metadata("design:type", SeriesRelationshipsTheCoverImageForTheSeries)
    ], SeriesRelationships.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", SeriesRelationshipsTheNetworkTheSeriesBelongsTo)
    ], SeriesRelationships.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seasons" }),
        __metadata("design:type", SeriesRelationshipsAListOfSeasonsInTheSeries)
    ], SeriesRelationships.prototype, "seasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taggings" }),
        __metadata("design:type", SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries)
    ], SeriesRelationships.prototype, "taggings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", SeriesRelationshipsAListOfTagsAssociatedWithTheSeries)
    ], SeriesRelationships.prototype, "tags", void 0);
    return SeriesRelationships;
}(utils_1.SpeakeasyBase));
exports.SeriesRelationships = SeriesRelationships;
var Series = /** @class */ (function (_super) {
    __extends(Series, _super);
    function Series() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", SeriesAttributes)
    ], Series.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Series.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", SeriesRelationships)
    ], Series.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Series.prototype, "type", void 0);
    return Series;
}(utils_1.SpeakeasyBase));
exports.Series = Series;
