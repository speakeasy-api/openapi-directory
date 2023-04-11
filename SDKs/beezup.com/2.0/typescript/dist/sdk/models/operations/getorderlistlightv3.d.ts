import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderListLightV3Response extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Could not process request for given parameters values. Please check error message for more details.
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
    /**
     * Successfully fetched the list of Orders
     */
    orderListLightWithLinks?: shared.OrderListLightWithLinks;
}
