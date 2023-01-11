import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare class NetworkAttributes extends SpeakeasyBase {
    copyright?: string;
    createdAt?: Date;
    description?: string;
    descriptionIsHtml?: boolean;
    descriptionPlain?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
    name?: string;
    publicEmail?: string;
    publicPageEnabled?: boolean;
    slug?: string;
    tumblrUrl?: string;
    twitterUrl?: string;
    updatedAt?: Date;
    websiteUrl?: string;
}
/**
 * The cover image for the network
**/
export declare class NetworkRelationshipsCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
/**
 * A collection of images linked to the network. This currently only includes
 * the cover image for the network.
 *
**/
export declare class NetworkRelationshipsImages extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The parent network of the network
**/
export declare class NetworkRelationshipsParent extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
/**
 * List of series within the network which are accessible to you
**/
export declare class NetworkRelationshipsSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class NetworkRelationships extends SpeakeasyBase {
    coverImage?: NetworkRelationshipsCoverImage;
    images?: NetworkRelationshipsImages;
    parent?: NetworkRelationshipsParent;
    series?: NetworkRelationshipsSeries;
}
export declare class Network extends SpeakeasyBase {
    attributes?: NetworkAttributes;
    id?: string;
    relationships?: NetworkRelationships;
    type?: string;
}
