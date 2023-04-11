import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Direction of sort "asc" or "desc"
 */
export declare enum AccountGetGuestsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class AccountGetGuestsRequest extends SpeakeasyBase {
    /**
     * Limit results to this number
     */
    limit?: number;
    /**
     * Offset where to start from
     */
    offset?: number;
    /**
     * Field to sort by
     */
    sortBy?: string;
    /**
     * Direction of sort "asc" or "desc"
     */
    sortDirection?: AccountGetGuestsSortDirectionEnum;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
}
export declare class AccountGetGuestsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
