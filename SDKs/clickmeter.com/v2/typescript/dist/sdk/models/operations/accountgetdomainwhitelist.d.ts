import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountGetDomainWhitelistRequest extends SpeakeasyBase {
    /**
     * Limit results to this number
     */
    limit?: number;
    /**
     * Offset where to start from
     */
    offset?: number;
}
export declare class AccountGetDomainWhitelistResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
