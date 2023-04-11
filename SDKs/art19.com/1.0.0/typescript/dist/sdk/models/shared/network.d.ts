import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare class NetworkAttributes extends SpeakeasyBase {
    /**
     * The copyright of the network
     */
    copyright?: string;
    createdAt?: Date;
    /**
     * The description of the network eventually in HTML format
     */
    description?: string;
    /**
     * Determines whether `description` is in HTML format or plain.
     */
    descriptionIsHtml?: boolean;
    /**
     * The description with all HTML markup removed. If the description does not contain markup
     *
     * @remarks
     * this is identitcal to `description`.
     *
     */
    descriptionPlain?: string;
    /**
     * Where to find this network on Facebook
     */
    facebookUrl?: string;
    /**
     * Where to find this network on Instagram
     */
    instagramUrl?: string;
    /**
     * Where to find the network on LinkedIn
     */
    linkedinUrl?: string;
    /**
     * The name of the network
     */
    name?: string;
    /**
     * A public point of contact through email
     */
    publicEmail?: string;
    /**
     * If this is `true`, a public web page for this network is available under
     *
     * @remarks
     * `https://art19.com/networks/{slug}`, where `slug` is the value of the corresponding attribute.
     * This public page provides details about the network as well as descriptive links to all its
     * series' public pages. If this is `false`, no such public page is available.
     *
     */
    publicPageEnabled?: boolean;
    /**
     * The unique slug for the network also used on its public page for example.
     *
     * @remarks
     * This value is unique system-wide amongst all networks _and_ series.
     *
     */
    slug?: string;
    /**
     * Where to find the network on Tumblr
     */
    tumblrUrl?: string;
    /**
     * Where to find the network on Twitter
     */
    twitterUrl?: string;
    updatedAt?: Date;
    /**
     * A public website for the network
     */
    websiteUrl?: string;
}
/**
 * The cover image for the network
 */
export declare class NetworkRelationshipsCoverImage extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
/**
 * A collection of images linked to the network. This currently only includes
 *
 * @remarks
 * the cover image for the network.
 *
 */
export declare class NetworkRelationshipsImages extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
/**
 * The parent network of the network
 */
export declare class NetworkRelationshipsParent extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
/**
 * List of series within the network which are accessible to you
 */
export declare class NetworkRelationshipsSeries extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class NetworkRelationships extends SpeakeasyBase {
    /**
     * The cover image for the network
     */
    coverImage?: NetworkRelationshipsCoverImage;
    /**
     * A collection of images linked to the network. This currently only includes
     *
     * @remarks
     * the cover image for the network.
     *
     */
    images?: NetworkRelationshipsImages;
    /**
     * The parent network of the network
     */
    parent?: NetworkRelationshipsParent;
    /**
     * List of series within the network which are accessible to you
     */
    series?: NetworkRelationshipsSeries;
}
export declare class Network extends SpeakeasyBase {
    attributes?: NetworkAttributes;
    id?: string;
    relationships?: NetworkRelationships;
    /**
     * The type of resource. This is always `networks`
     */
    type?: string;
}
