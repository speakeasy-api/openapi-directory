import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLastBlockNumberRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    contentType: string;
}
export declare class GetLastBlockNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getLastBlockNumber?: shared.GetLastBlockNumber;
}
