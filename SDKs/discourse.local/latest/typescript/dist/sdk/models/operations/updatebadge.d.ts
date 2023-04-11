import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateBadgeRequestBody extends SpeakeasyBase {
    /**
     * The ID for the badge type. 1 for Gold, 2 for Silver,
     *
     * @remarks
     * 3 for Bronze.
     */
    badgeTypeId: number;
    /**
     * The name for the new badge.
     */
    name: string;
}
export declare class UpdateBadgeRequest extends SpeakeasyBase {
    requestBody?: UpdateBadgeRequestBody;
    id: number;
}
export declare class UpdateBadge200ApplicationJSONBadge extends SpeakeasyBase {
    allowTitle: boolean;
    autoRevoke: boolean;
    badgeGroupingId: number;
    badgeTypeId: number;
    description: string;
    enabled: boolean;
    grantCount: number;
    icon: string;
    id: number;
    imageUrl: string;
    listable: boolean;
    longDescription: string;
    manuallyGrantable: boolean;
    multipleGrant: boolean;
    name: string;
    query: string;
    showPosts: boolean;
    slug: string;
    system: boolean;
    targetPosts: boolean;
    trigger: string;
}
export declare class UpdateBadge200ApplicationJSONBadgeTypes extends SpeakeasyBase {
    id: number;
    name: string;
    sortOrder: number;
}
/**
 * success response
 */
export declare class UpdateBadge200ApplicationJSON extends SpeakeasyBase {
    badge: UpdateBadge200ApplicationJSONBadge;
    badgeTypes: UpdateBadge200ApplicationJSONBadgeTypes[];
}
export declare class UpdateBadgeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    updateBadge200ApplicationJSONObject?: UpdateBadge200ApplicationJSON;
}
