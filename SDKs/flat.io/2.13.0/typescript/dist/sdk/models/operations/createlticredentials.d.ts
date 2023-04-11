import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLtiCredentialsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateLtiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not admin of an organization
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * The LTI Credentials
     */
    ltiCredentials?: shared.LtiCredentials;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
