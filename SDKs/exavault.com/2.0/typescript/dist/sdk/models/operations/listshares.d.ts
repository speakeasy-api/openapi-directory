import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Set of shares to return. (**all**=all of them, **active**=shares that are currently active, **curentUser**=shares created by you)
 */
export declare enum ListSharesScopeEnum {
    All = "all",
    Active = "active",
    CurrentUser = "currentUser"
}
/**
 * What order the list of matches should be in.
 */
export declare enum ListSharesSortEnum {
    Created = "created",
    MinusCreated = "-created"
}
/**
 * Limit the list of matches to only certain types of shares.
 */
export declare enum ListSharesTypeEnum {
    Receive = "receive",
    SharedFolder = "shared_folder",
    Send = "send"
}
export declare class ListSharesRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.
     */
    include?: string;
    /**
     * Limit of records to be returned (for pagination)
     */
    limit?: number;
    /**
     * When provided, only shares with a message that contains the text will be included in the list of matches. Both the subject and the body of all messages will be checked for matches. This will always be a wildcard match, so that searching for **taxes** will return any shares with a message that contains the word "taxes".
     */
    message?: string;
    /**
     * When provided, only shares whose names include this value will be in the list. Supports wildcards, such as **send\*** to return everything starting with "send".
     *
     * @remarks
     *
     * Use this parameter if you are searching for shares or receives for a specific folder name. For example ** /Clients/ACME/To Be Processed**.
     */
    name?: string;
    /**
     * Current offset of records (for pagination)
     */
    offset?: number;
    /**
     * Filter the results to include only shares that invited a certain email address. Supports wildcard matching so that **\*@example.com** will give back entries shared with addresses ending in "@example.com".
     */
    recipient?: string;
    /**
     * Set of shares to return. (**all**=all of them, **active**=shares that are currently active, **curentUser**=shares created by you)
     */
    scope?: ListSharesScopeEnum;
    /**
     * Searches the share name, username, recipients, share messages fields for the provided value. Supports wildcard searches.
     */
    search?: string;
    /**
     * What order the list of matches should be in.
     */
    sort?: ListSharesSortEnum;
    /**
     * Limit the list of matches to only certain types of shares.
     */
    type?: ListSharesTypeEnum;
    /**
     * When provided, only shares created by the user with that `username` will be included in the list. Does not support wildcard searching.
     */
    username?: string;
}
export declare class ListSharesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    shareCollectionResponse?: shared.ShareCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
