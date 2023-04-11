import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsDeleteTokenRequestBody extends SpeakeasyBase {
    /**
     * The OAuth access token used to authenticate to the GitHub API.
     */
    accessToken: string;
}
export declare class AppsDeleteTokenRequest extends SpeakeasyBase {
    requestBody: AppsDeleteTokenRequestBody;
    /**
     * The client ID of the GitHub app.
     */
    clientId: string;
}
export declare class AppsDeleteTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
