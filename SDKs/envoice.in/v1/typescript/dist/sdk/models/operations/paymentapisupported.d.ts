import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentApiSupportedRequest extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentApiSupportedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    paymentGatewayDetailsApiModels?: shared.PaymentGatewayDetailsApiModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
