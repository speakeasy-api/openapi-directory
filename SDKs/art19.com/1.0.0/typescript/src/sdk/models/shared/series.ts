import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";


export enum SeriesAttributesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}

export enum SeriesAttributesTypeEnum {
    Series = "Series"
}


export class SeriesAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amazon_subscription_url" })
  amazonSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=castbox_subscription_url" })
  castboxSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=cover_image_id" })
  coverImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=description_is_html" })
  descriptionIsHtml?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description_plain" })
  descriptionPlain?: string;

  @SpeakeasyMetadata({ data: "json, name=facebook_url" })
  facebookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=google_subscription_url" })
  googleSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=iheart_subscription_url" })
  iheartSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=instagram_url" })
  instagramUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=itunes_subscription_badge_enabled" })
  itunesSubscriptionBadgeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itunes_subscription_url" })
  itunesSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedin_url" })
  linkedinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=pocket_casts_subscription_url" })
  pocketCastsSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=podcast_subscription_url" })
  podcastSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=public_page_enabled" })
  publicPageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_title" })
  publicTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=radio_public_subscription_url" })
  radioPublicSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=rss_author" })
  rssAuthor?: string;

  @SpeakeasyMetadata({ data: "json, name=rss_copyright" })
  rssCopyright?: string;

  @SpeakeasyMetadata({ data: "json, name=rss_email" })
  rssEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=rss_owner" })
  rssOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=sort_title" })
  sortTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=spotify_subscription_badge_enabled" })
  spotifySubscriptionBadgeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spotify_subscription_url" })
  spotifySubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SeriesAttributesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stitcher_subscription_badge_enabled" })
  stitcherSubscriptionBadgeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stitcher_subscription_url" })
  stitcherSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=tumblr_url" })
  tumblrUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=tune_in_subscription_url" })
  tuneInSubscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter_url" })
  twitterUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SeriesAttributesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=website_url" })
  websiteUrl?: string;
}


export class SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


// SeriesRelationshipsCoverImage
/** 
 * The cover image for the series
**/
export class SeriesRelationshipsCoverImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeriesRelationshipsTheCoverImageForTheSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeriesRelationshipsTheNetworkTheSeriesBelongsTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class SeriesRelationshipsAListOfSeasonsInTheSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeriesRelationshipsAListOfTagsAssociatedWithTheSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class SeriesRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification_inclusions" })
  classificationInclusions?: SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries;

  @SpeakeasyMetadata({ data: "json, name=cover_image" })
  coverImage?: SeriesRelationshipsCoverImage;

  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits?: SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries;

  @SpeakeasyMetadata({ data: "json, name=episodes" })
  episodes?: SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: SeriesRelationshipsTheCoverImageForTheSeries;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: SeriesRelationshipsTheNetworkTheSeriesBelongsTo;

  @SpeakeasyMetadata({ data: "json, name=seasons" })
  seasons?: SeriesRelationshipsAListOfSeasonsInTheSeries;

  @SpeakeasyMetadata({ data: "json, name=taggings" })
  taggings?: SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: SeriesRelationshipsAListOfTagsAssociatedWithTheSeries;
}


export class Series extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: SeriesAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: SeriesRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
