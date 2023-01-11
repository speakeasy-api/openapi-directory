import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLtiCredentialsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListLtiCredentialsRequest extends SpeakeasyBase {
    security: ListLtiCredentialsSecurity;
}
export declare class ListLtiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    ltiCredentials?: shared.LtiCredentials[];
    statusCode: number;
}
