import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAddressesRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    contentType: string;
}
export declare class ListAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listAddresses?: shared.ListAddresses;
}
