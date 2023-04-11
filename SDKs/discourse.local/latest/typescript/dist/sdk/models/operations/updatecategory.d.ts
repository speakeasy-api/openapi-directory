import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCategoryRequestBody extends SpeakeasyBase {
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
export declare class UpdateCategoryRequest extends SpeakeasyBase {
    requestBody?: UpdateCategoryRequestBody;
    id: number;
}
export declare class UpdateCategory200ApplicationJSONCategoryGroupPermissions extends SpeakeasyBase {
    groupName: string;
    permissionType: number;
}
export declare class UpdateCategory200ApplicationJSONCategoryRequiredTagGroups extends SpeakeasyBase {
    minCount: number;
    name: string;
}
export declare class UpdateCategory200ApplicationJSONCategory extends SpeakeasyBase {
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
    formTemplateIds: any[];
    groupPermissions: UpdateCategory200ApplicationJSONCategoryGroupPermissions[];
    hasChildren: string;
    id: number;
    mailinglistMirror: boolean;
    minimumRequiredTags: number;
    name: string;
    navigateToFirstPostAfterRead: boolean;
    notificationLevel: number;
    numFeaturedTopics: number;
    permission: string;
    position: number;
    postCount: number;
    readOnlyBanner: string;
    readRestricted: boolean;
    requiredTagGroups: UpdateCategory200ApplicationJSONCategoryRequiredTagGroups[];
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
export declare class UpdateCategory200ApplicationJSON extends SpeakeasyBase {
    category: UpdateCategory200ApplicationJSONCategory;
    success: string;
}
export declare class UpdateCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    updateCategory200ApplicationJSONObject?: UpdateCategory200ApplicationJSON;
}
