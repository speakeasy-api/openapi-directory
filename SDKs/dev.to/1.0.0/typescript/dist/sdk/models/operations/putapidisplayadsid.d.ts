import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Potentially limits visitors to whom the ad is visible
 */
export declare enum PutApiDisplayAdsIdRequestBodyDisplayToEnum {
    All = "all",
    LoggedIn = "logged_in",
    LoggedOut = "logged_out"
}
/**
 * Identifies which area of site layout the ad can appear in
 */
export declare enum PutApiDisplayAdsIdRequestBodyPlacementAreaEnum {
    SidebarLeft = "sidebar_left",
    SidebarLeft2 = "sidebar_left_2",
    SidebarRight = "sidebar_right",
    PostSidebar = "post_sidebar",
    PostComments = "post_comments"
}
export declare class PutApiDisplayAdsIdRequestBody extends SpeakeasyBase {
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
    displayTo?: PutApiDisplayAdsIdRequestBodyDisplayToEnum;
    /**
     * For internal use, helps distinguish ads from one another
     */
    name: string;
    /**
     * Identifies the organization to which the ad belongs, required for 'community' type ads
     */
    organizationId?: number;
    /**
     * Identifies which area of site layout the ad can appear in
     */
    placementArea: PutApiDisplayAdsIdRequestBodyPlacementAreaEnum;
    /**
     * Ad must be both published and approved to be in rotation
     */
    published?: boolean;
    /**
     * Tags on which this ad can be displayed (blank is all/any tags)
     */
    tagList?: string;
}
export declare class PutApiDisplayAdsIdRequest extends SpeakeasyBase {
    requestBody?: PutApiDisplayAdsIdRequestBody;
    /**
     * The ID of the user to unpublish.
     */
    id: number;
}
export declare class PutApiDisplayAdsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
