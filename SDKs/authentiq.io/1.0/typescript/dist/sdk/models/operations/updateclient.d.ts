import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClientSecurity extends SpeakeasyBase {
    clientRegistrationToken?: string;
    oauthCode?: string;
    oauthImplicit?: string;
}
export declare class UpdateClientRequest extends SpeakeasyBase {
    /**
     * Client Object
     */
    client: shared.Client;
    /**
     * Client identifier
     */
    clientId: string;
}
export declare class UpdateClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * Client updated
     */
    client?: shared.Client;
    contentType: string;
    /**
     * Problem Detail error response
     */
    problemDetail?: shared.ProblemDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
