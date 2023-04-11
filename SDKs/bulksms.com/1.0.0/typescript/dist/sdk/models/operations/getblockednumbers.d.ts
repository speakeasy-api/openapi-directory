import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBlockedNumbersSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetBlockedNumbersRequest extends SpeakeasyBase {
    /**
     * The maximum number of records to return. The default value is `10000`. The value cannot be greater than 10000.
     */
    limit?: number;
    /**
     * Records with an `id` that is greater or equal to min-id will be returned. The default value is `0`.  You can add 1 to an id that you previously retrieved, to return subsequent records.
     */
    minId?: number;
}
export declare class GetBlockedNumbersResponse extends SpeakeasyBase {
    /**
     * A list of BlockedNumber objects
     */
    blockedNumber?: shared.BlockedNumber;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
