import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnsubscribeAddressRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    unsubscribeAddressRequest: shared.UnsubscribeAddressRequest;
}
export declare class UnsubscribeAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    unsubscribeAddress?: shared.UnsubscribeAddress;
}
