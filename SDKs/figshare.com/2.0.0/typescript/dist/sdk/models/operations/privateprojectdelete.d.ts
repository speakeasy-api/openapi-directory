import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectDeletePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateProjectDeletePathParams;
    security: PrivateProjectDeleteSecurity;
}
export declare class PrivateProjectDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
