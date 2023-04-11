import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountsRequest extends SpeakeasyBase {
    /**
     * Filters the list, returning only accounts containing the specified asset type.
     */
    assetType?: shared.AssetTypeEnum;
    /**
     * Return only accounts, matching the specified identifier.
     */
    identifier?: string;
    /**
     * The number of items to skip in the resultset.
     */
    skip?: number;
    /**
     * The number of items to return in the resultset. The returned count can be equal or less than this number.
     */
    take?: number;
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accounts?: shared.Account[];
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
