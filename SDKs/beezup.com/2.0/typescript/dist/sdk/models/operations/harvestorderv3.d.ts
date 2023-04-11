import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HarvestOrderV3Request extends SpeakeasyBase {
    accountId: number;
    /**
     * The BeezUP Order identifier
     */
    beezUPOrderId: string;
    /**
     * The marketplace technical code
     */
    marketplaceTechnicalCode: string;
}
export declare class HarvestOrderV3Response extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requested Order could not be found
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
