import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Potentially limits visitors to whom the ad is visible
 */
export declare enum PostApiDisplayAdsRequestBodyDisplayToEnum {
    All = "all",
    LoggedIn = "logged_in",
    LoggedOut = "logged_out"
}
/**
 * Identifies which area of site layout the ad can appear in
 */
export declare enum PostApiDisplayAdsRequestBodyPlacementAreaEnum {
    SidebarLeft = "sidebar_left",
    SidebarLeft2 = "sidebar_left_2",
    SidebarRight = "sidebar_right",
    PostSidebar = "post_sidebar",
    PostComments = "post_comments"
}
/**
 * Types of the billboards:
 *
 * @remarks
 * in_house (created by admins),
 * community (created by an entity, appears on entity's content),
 * external ( created by an entity, or a non-entity, can appear everywhere)
 *
 */
export declare enum PostApiDisplayAdsRequestBodyTypeOfEnum {
    InHouse = "in_house",
    Community = "community",
    External = "external"
}
export declare class PostApiDisplayAdsRequestBody extends SpeakeasyBase {
    /**
     * Ad must be both published and approved to be in rotation
     */
    approved?: boolean;
    /**
     * The text (in markdown) of the ad (required)
     */
    bodyMarkdown: string;
    /**
     * Identifies the user who created the ad.
     */
    creatorId?: number;
    /**
     * Potentially limits visitors to whom the ad is visible
     */
    displayTo?: PostApiDisplayAdsRequestBodyDisplayToEnum;
    /**
     * For internal use, helps distinguish ads from one another
     */
    name: string;
    /**
     * Identifies the organization to which the ad belongs
     */
    organizationId?: number;
    /**
     * Identifies which area of site layout the ad can appear in
     */
    placementArea: PostApiDisplayAdsRequestBodyPlacementAreaEnum;
    /**
     * Ad must be both published and approved to be in rotation
     */
    published?: boolean;
    /**
     * Tags on which this ad can be displayed (blank is all/any tags)
     */
    tagList?: string;
    /**
     * Types of the billboards:
     *
     * @remarks
     * in_house (created by admins),
     * community (created by an entity, appears on entity's content),
     * external ( created by an entity, or a non-entity, can appear everywhere)
     *
     */
    typeOf?: PostApiDisplayAdsRequestBodyTypeOfEnum;
}
export declare class PostApiDisplayAdsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
