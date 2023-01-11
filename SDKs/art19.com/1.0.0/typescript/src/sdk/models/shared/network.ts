import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";



export class NetworkAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

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

  @SpeakeasyMetadata({ data: "json, name=instagram_url" })
  instagramUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedin_url" })
  linkedinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=public_email" })
  publicEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=public_page_enabled" })
  publicPageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=tumblr_url" })
  tumblrUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter_url" })
  twitterUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=website_url" })
  websiteUrl?: string;
}


// NetworkRelationshipsCoverImage
/** 
 * The cover image for the network
**/
export class NetworkRelationshipsCoverImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


// NetworkRelationshipsImages
/** 
 * A collection of images linked to the network. This currently only includes
 * the cover image for the network.
 * 
**/
export class NetworkRelationshipsImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


// NetworkRelationshipsParent
/** 
 * The parent network of the network
**/
export class NetworkRelationshipsParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


// NetworkRelationshipsSeries
/** 
 * List of series within the network which are accessible to you
**/
export class NetworkRelationshipsSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class NetworkRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cover_image" })
  coverImage?: NetworkRelationshipsCoverImage;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: NetworkRelationshipsImages;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: NetworkRelationshipsParent;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: NetworkRelationshipsSeries;
}


export class Network extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: NetworkAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: NetworkRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
