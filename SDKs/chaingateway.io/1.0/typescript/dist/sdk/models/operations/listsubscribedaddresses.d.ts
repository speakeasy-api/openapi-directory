import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSubscribedAddressesRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    contentType: string;
}
export declare class ListSubscribedAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listSubscribedAddresses?: shared.ListSubscribedAddresses;
}
