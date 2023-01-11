import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectDetailsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectDetailsRequest extends SpeakeasyBase {
    pathParams: PrivateProjectDetailsPathParams;
    security: PrivateProjectDetailsSecurity;
}
export declare class PrivateProjectDetailsResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    projectCompletePrivate?: shared.ProjectCompletePrivate;
    statusCode: number;
}
