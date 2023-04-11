import { SpeakeasyBase } from "../../../internal/utils";
import { UserUserSearchResponseDetail } from "./userusersearchresponsedetail";
export declare class UserUserSearchResponse extends SpeakeasyBase {
    hasMore?: boolean;
    page?: number;
    searchResults?: UserUserSearchResponseDetail[];
}
