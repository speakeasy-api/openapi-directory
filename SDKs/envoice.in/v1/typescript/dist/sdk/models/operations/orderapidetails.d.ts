import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiDetailsRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    orderFullDetailsApiModel?: shared.OrderFullDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
