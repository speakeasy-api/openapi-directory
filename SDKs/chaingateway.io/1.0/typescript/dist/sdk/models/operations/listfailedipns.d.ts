import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFailedIPNsRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    contentType: string;
}
export declare class ListFailedIPNsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listFailedIPNs?: shared.ListFailedIPNs;
}
