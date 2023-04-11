import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClearAddressRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    clearAddressRequest: shared.ClearAddressRequest;
}
export declare class ClearAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    clearAddress?: shared.ClearAddress;
}
