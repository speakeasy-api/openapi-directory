import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateGroupRequestBodyGroup extends SpeakeasyBase {
    /**
     * pipe|separated
     */
    automaticMembershipEmailDomains?: string;
    /**
     * About Group
     */
    bioRaw?: string;
    defaultNotificationLevel?: number;
    flairBgColor?: string;
    flairIcon?: string;
    flairUploadId?: number;
    fullName?: string;
    mutedCategoryIds?: number[];
    name: string;
    /**
     * comma,separated
     */
    ownerUsernames?: string;
    primaryGroup?: boolean;
    publicAdmission?: boolean;
    publicExit?: boolean;
    regularCategoryIds?: number[];
    trackingCategoryIds?: number[];
    /**
     * comma,separated
     */
    usernames?: string;
    visibilityLevel?: number;
    watchingCategoryIds?: number[];
    watchingFirstPostCategoryIds?: number[];
}
export declare class UpdateGroupRequestBody extends SpeakeasyBase {
    group: UpdateGroupRequestBodyGroup;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    requestBody?: UpdateGroupRequestBody;
    id: number;
}
/**
 * success response
 */
export declare class UpdateGroup200ApplicationJSON extends SpeakeasyBase {
    success?: string;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    updateGroup200ApplicationJSONObject?: UpdateGroup200ApplicationJSON;
}
