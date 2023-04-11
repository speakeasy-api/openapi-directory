import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AdminListBadges200ApplicationJSONAdminBadgesTriggers extends SpeakeasyBase {
    none: number;
    postAction: number;
    postRevision: number;
    trustLevelChange: number;
    userChange: number;
}
export declare class AdminListBadges200ApplicationJSONAdminBadges extends SpeakeasyBase {
    badgeGroupingIds: any[];
    badgeIds: any[];
    badgeTypeIds: any[];
    protectedSystemFields: any[];
    triggers: AdminListBadges200ApplicationJSONAdminBadgesTriggers;
}
export declare class AdminListBadges200ApplicationJSONBadgeGroupings extends SpeakeasyBase {
    description: string;
    id: number;
    name: string;
    position: number;
    system: boolean;
}
export declare class AdminListBadges200ApplicationJSONBadgeTypes extends SpeakeasyBase {
    id: number;
    name: string;
    sortOrder: number;
}
export declare class AdminListBadges200ApplicationJSONBadges extends SpeakeasyBase {
    allowTitle: boolean;
    autoRevoke: boolean;
    badgeGroupingId: number;
    badgeTypeId: number;
    description: string;
    enabled: boolean;
    grantCount: number;
    i18nName?: string;
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
    trigger: number;
}
/**
 * success response
 */
export declare class AdminListBadges200ApplicationJSON extends SpeakeasyBase {
    adminBadges: AdminListBadges200ApplicationJSONAdminBadges;
    badgeGroupings: AdminListBadges200ApplicationJSONBadgeGroupings[];
    badgeTypes: AdminListBadges200ApplicationJSONBadgeTypes[];
    badges: AdminListBadges200ApplicationJSONBadges[];
}
export declare class AdminListBadgesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    adminListBadges200ApplicationJSONObject?: AdminListBadges200ApplicationJSON;
}
