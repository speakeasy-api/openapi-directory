import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAddressRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    deleteAddressRequest: shared.DeleteAddressRequest;
}
export declare class DeleteAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    deleteAddress?: shared.DeleteAddress;
}
