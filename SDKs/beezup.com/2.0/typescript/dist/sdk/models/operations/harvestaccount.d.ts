import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HarvestAccountRequest extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId?: string;
    marketplaceOrderId?: string;
    /**
     * The marketplace technical code
     */
    marketplaceTechnicalCode: string;
}
export declare class HarvestAccountResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requested Account Or beezUPOrderId could not be found
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
