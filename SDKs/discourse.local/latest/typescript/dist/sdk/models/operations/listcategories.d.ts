import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum ListCategoriesIncludeSubcategoriesEnum {
    True = "true"
}
export declare class ListCategoriesRequest extends SpeakeasyBase {
    includeSubcategories?: ListCategoriesIncludeSubcategoriesEnum;
}
export declare class ListCategories200ApplicationJSONCategoryListCategories extends SpeakeasyBase {
    canEdit: boolean;
    color: string;
    defaultListFilter: string;
    defaultTopPeriod: string;
    defaultView: string;
    description: string;
    descriptionExcerpt: string;
    descriptionText: string;
    hasChildren: boolean;
    id: number;
    isUncategorized?: boolean;
    minimumRequiredTags: number;
    name: string;
    navigateToFirstPostAfterRead: boolean;
    notificationLevel: number;
    numFeaturedTopics: number;
    permission: number;
    position: number;
    postCount: number;
    readRestricted: boolean;
    showSubcategoryList: boolean;
    slug: string;
    sortAscending: string;
    sortOrder: string;
    subcategoryIds: any[];
    subcategoryList?: any[];
    subcategoryListStyle: string;
    textColor: string;
    topicCount: number;
    topicTemplate: string;
    topicUrl: string;
    topicsAllTime: number;
    topicsDay: number;
    topicsMonth: number;
    topicsWeek: number;
    topicsYear: number;
    uploadedBackground: string;
    uploadedLogo: string;
    uploadedLogoDark: string;
}
export declare class ListCategories200ApplicationJSONCategoryList extends SpeakeasyBase {
    canCreateCategory: boolean;
    canCreateTopic: boolean;
    categories: ListCategories200ApplicationJSONCategoryListCategories[];
}
/**
 * success response
 */
export declare class ListCategories200ApplicationJSON extends SpeakeasyBase {
    categoryList: ListCategories200ApplicationJSONCategoryList;
}
export declare class ListCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    listCategories200ApplicationJSONObject?: ListCategories200ApplicationJSON;
}
