import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCategoryRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetCategory200ApplicationJSONCategoryGroupPermissions extends SpeakeasyBase {
    groupName: string;
    permissionType: number;
}
export declare class GetCategory200ApplicationJSONCategoryRequiredTagGroups extends SpeakeasyBase {
    minCount: number;
    name: string;
}
export declare class GetCategory200ApplicationJSONCategory extends SpeakeasyBase {
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
    groupPermissions: GetCategory200ApplicationJSONCategoryGroupPermissions[];
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
    requiredTagGroups: GetCategory200ApplicationJSONCategoryRequiredTagGroups[];
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
 * response
 */
export declare class GetCategory200ApplicationJSON extends SpeakeasyBase {
    category: GetCategory200ApplicationJSONCategory;
}
export declare class GetCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    getCategory200ApplicationJSONObject?: GetCategory200ApplicationJSON;
}
