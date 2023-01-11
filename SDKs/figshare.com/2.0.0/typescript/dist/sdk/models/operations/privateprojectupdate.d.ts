import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectUpdatePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateProjectUpdatePathParams;
    request: shared.ProjectUpdate;
    security: PrivateProjectUpdateSecurity;
}
export declare class PrivateProjectUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
