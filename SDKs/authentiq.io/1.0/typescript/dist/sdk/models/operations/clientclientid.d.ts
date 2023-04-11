import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientClientIdSecurity extends SpeakeasyBase {
    clientRegistrationToken?: string;
    oauthCode?: string;
    oauthImplicit?: string;
}
export declare class ClientClientIdRequest extends SpeakeasyBase {
    /**
     * Client identifier
     */
    clientId: string;
}
export declare class ClientClientIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Problem Detail error response
     */
    problemDetail?: shared.ProblemDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
