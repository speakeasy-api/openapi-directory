import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsCheckAuthorizationRequest extends SpeakeasyBase {
    accessToken: string;
    /**
     * The client ID of your GitHub app.
     */
    clientId: string;
}
export declare class AppsCheckAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    nullableAuthorization?: shared.NullableAuthorization;
}
