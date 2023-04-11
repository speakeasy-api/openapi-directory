import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetMerchantOrderInfoV3Request extends SpeakeasyBase {
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
    /**
     * If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
     */
    testMode?: boolean;
}
export declare class SetMerchantOrderInfoV3Response extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Could not update Order merchant information. Please see body for more information.
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
