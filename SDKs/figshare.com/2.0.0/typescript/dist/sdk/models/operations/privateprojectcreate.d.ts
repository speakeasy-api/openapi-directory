import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectCreateRequest extends SpeakeasyBase {
    request: shared.ProjectCreate;
    security: PrivateProjectCreateSecurity;
}
export declare class PrivateProjectCreateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    location?: shared.Location;
    statusCode: number;
}
