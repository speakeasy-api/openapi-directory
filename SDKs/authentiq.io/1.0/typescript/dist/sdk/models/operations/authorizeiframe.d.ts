import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AuthorizeIframeRequest extends SpeakeasyBase {
    /**
     * Client identifier
     */
    clientId: string;
}
export declare class AuthorizeIframeResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
