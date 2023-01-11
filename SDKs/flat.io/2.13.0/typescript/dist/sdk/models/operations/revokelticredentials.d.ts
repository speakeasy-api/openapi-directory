import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeLtiCredentialsPathParams extends SpeakeasyBase {
    credentials: string;
}
export declare class RevokeLtiCredentialsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class RevokeLtiCredentialsRequest extends SpeakeasyBase {
    pathParams: RevokeLtiCredentialsPathParams;
    security: RevokeLtiCredentialsSecurity;
}
export declare class RevokeLtiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
