import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountGetIpBlacklistRequest extends SpeakeasyBase {
    /**
     * Limit results to this number
     */
    limit?: number;
    /**
     * Offset where to start from
     */
    offset?: number;
}
export declare class AccountGetIpBlacklistResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
