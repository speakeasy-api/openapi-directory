import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NewAddressRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    newAddressRequest: shared.NewAddressRequest;
}
export declare class NewAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    newAddress?: shared.NewAddress;
}
