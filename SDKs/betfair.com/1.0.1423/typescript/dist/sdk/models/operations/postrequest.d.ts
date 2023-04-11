import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRequestResponse extends SpeakeasyBase {
    /**
     * Responses are received from socket
     */
    allResponseTypesExample?: shared.AllResponseTypesExample;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
