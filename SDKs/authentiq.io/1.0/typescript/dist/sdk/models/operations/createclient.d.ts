import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateClientSecurity extends SpeakeasyBase {
    clientRegistrationToken?: string;
    oauthCode?: string;
    oauthImplicit?: string;
}
export declare class CreateClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Problem Detail error response
     */
    problemDetail?: shared.ProblemDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
