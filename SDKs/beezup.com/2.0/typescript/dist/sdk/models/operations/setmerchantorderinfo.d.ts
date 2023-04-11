import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetMerchantOrderInfoRequest extends SpeakeasyBase {
    accountId: number;
    /**
     * The BeezUP Order identifier
     */
    beezUPOrderId: string;
    /**
     * The marketplace technical code
     */
    marketplaceTechnicalCode: string;
    setMerchantOrderInfoRequest: shared.SetMerchantOrderInfoRequest;
}
export declare class SetMerchantOrderInfoResponse extends SpeakeasyBase {
    /**
     * Could not update Order merchant information. Please see body for more information.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
