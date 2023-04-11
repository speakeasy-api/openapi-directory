import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBanksRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * banks
 */
export declare class GetBanks200ApplicationJSON extends SpeakeasyBase {
    banks: shared.Connector[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetBanksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * banks
     */
    getBanks200ApplicationJSONObject?: GetBanks200ApplicationJSON;
}
