import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateCategoryRequestBody extends SpeakeasyBase {
    allowBadges?: boolean;
    color?: string;
    formTemplateIds?: any[];
    name: string;
    parentCategoryId?: number;
    permissions?: Record<string, any>;
    searchPriority?: number;
    slug?: string;
    textColor?: string;
    topicFeaturedLinksAllowed?: boolean;
}
export declare class CreateCategory200ApplicationJSONCategoryGroupPermissions extends SpeakeasyBase {
    groupName: string;
    permissionType: number;
}
export declare class CreateCategory200ApplicationJSONCategoryRequiredTagGroups extends SpeakeasyBase {
    minCount: number;
    name: string;
}
export declare class CreateCategory200ApplicationJSONCategory extends SpeakeasyBase {
    allTopicsWiki: boolean;
    allowBadges: boolean;
    allowGlobalTags?: boolean;
    allowUnlimitedOwnerEditsOnFirstPost: boolean;
    allowedTagGroups?: any[];
    allowedTags?: any[];
    autoCloseBasedOnLastPost: boolean;
    autoCloseHours: string;
    availableGroups: any[];
    canDelete: boolean;
    canEdit: boolean;
    color: string;
    customFields: Record<string, any>;
    defaultListFilter: string;
    defaultSlowModeSeconds: string;
    defaultTopPeriod: string;
    defaultView: string;
    description: string;
    descriptionExcerpt: string;
    descriptionText: string;
    emailIn: string;
    emailInAllowStrangers: boolean;
    formTemplateIds?: any[];
    groupPermissions: CreateCategory200ApplicationJSONCategoryGroupPermissions[];
    hasChildren: string;
    id: number;
    mailinglistMirror: boolean;
    minimumRequiredTags: number;
    name: string;
    navigateToFirstPostAfterRead: boolean;
    notificationLevel: number;
    numFeaturedTopics: number;
    permission: number;
    position: number;
    postCount: number;
    readOnlyBanner: string;
    readRestricted: boolean;
    requiredTagGroups: CreateCategory200ApplicationJSONCategoryRequiredTagGroups[];
    searchPriority: number;
    showSubcategoryList: boolean;
    slug: string;
    sortAscending: string;
    sortOrder: string;
    subcategoryListStyle: string;
    textColor: string;
    topicCount: number;
    topicFeaturedLinkAllowed: boolean;
    topicTemplate: string;
    topicUrl: string;
    uploadedBackground: string;
    uploadedLogo: string;
    uploadedLogoDark: string;
}
/**
 * success response
 */
export declare class CreateCategory200ApplicationJSON extends SpeakeasyBase {
    category: CreateCategory200ApplicationJSONCategory;
}
export declare class CreateCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    createCategory200ApplicationJSONObject?: CreateCategory200ApplicationJSON;
}
