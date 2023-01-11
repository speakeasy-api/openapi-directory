import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PrivateAuthorsSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}
export declare enum PrivateAuthorsSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class PrivateAuthorsSearch extends SpeakeasyBase {
    groupId?: number;
    institutionId?: number;
    isActive?: boolean;
    isPublic?: boolean;
    limit?: number;
    offset?: number;
    orcid?: string;
    order?: PrivateAuthorsSearchOrderEnum;
    orderDirection?: PrivateAuthorsSearchOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    searchFor?: string;
}
