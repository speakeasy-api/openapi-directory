import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscribeAddressRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    subscribeAddressRequest: shared.SubscribeAddressRequest;
}
export declare class SubscribeAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    subscribeAddress?: shared.SubscribeAddress;
}
