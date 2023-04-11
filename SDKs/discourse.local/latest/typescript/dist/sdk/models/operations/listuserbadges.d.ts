import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListUserBadgesRequest extends SpeakeasyBase {
    username: string;
}
export declare class ListUserBadges200ApplicationJSONBadgeTypes extends SpeakeasyBase {
    id: number;
    name: string;
    sortOrder: number;
}
export declare class ListUserBadges200ApplicationJSONBadges extends SpeakeasyBase {
    allowTitle: boolean;
    badgeGroupingId: number;
    badgeTypeId: number;
    description: string;
    enabled: boolean;
    grantCount: number;
    icon: string;
    id: number;
    imageUrl: string;
    listable: boolean;
    manuallyGrantable: boolean;
    multipleGrant: boolean;
    name: string;
    slug: string;
    system: boolean;
}
export declare class ListUserBadges200ApplicationJSONGrantedBies extends SpeakeasyBase {
    admin: boolean;
    avatarTemplate: string;
    flairName: string;
    id: number;
    moderator: boolean;
    name: string;
    trustLevel: number;
    username: string;
}
export declare class ListUserBadges200ApplicationJSONUserBadges extends SpeakeasyBase {
    badgeId: number;
    canFavorite: boolean;
    grantedAt: string;
    grantedById: number;
    groupingPosition: number;
    id: number;
    isFavorite: string;
}
/**
 * success response
 */
export declare class ListUserBadges200ApplicationJSON extends SpeakeasyBase {
    badgeTypes?: ListUserBadges200ApplicationJSONBadgeTypes[];
    badges?: ListUserBadges200ApplicationJSONBadges[];
    grantedBies?: ListUserBadges200ApplicationJSONGrantedBies[];
    userBadges: ListUserBadges200ApplicationJSONUserBadges[];
}
export declare class ListUserBadgesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    listUserBadges200ApplicationJSONObject?: ListUserBadges200ApplicationJSON;
}
