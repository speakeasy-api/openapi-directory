import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOriginKeysResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    checkoutUtilityResponse?: shared.CheckoutUtilityResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
