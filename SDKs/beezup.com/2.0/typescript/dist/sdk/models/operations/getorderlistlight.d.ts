import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderListLightResponse extends SpeakeasyBase {
    /**
     * Could not process request for given parameters values. Please check error message for more details.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully fetched the list of Orders
     */
    orderListLight?: shared.OrderListLight;
}
