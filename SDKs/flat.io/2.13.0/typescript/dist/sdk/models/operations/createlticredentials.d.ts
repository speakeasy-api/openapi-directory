import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLtiCredentialsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateLtiCredentialsRequest extends SpeakeasyBase {
    request: shared.LtiCredentialsCreation;
    security: CreateLtiCredentialsSecurity;
}
export declare class CreateLtiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    ltiCredentials?: shared.LtiCredentials;
    statusCode: number;
}
