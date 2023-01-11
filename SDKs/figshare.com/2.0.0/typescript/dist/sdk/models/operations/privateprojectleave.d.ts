import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectLeavePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectLeaveSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectLeaveRequest extends SpeakeasyBase {
    pathParams: PrivateProjectLeavePathParams;
    security: PrivateProjectLeaveSecurity;
}
export declare class PrivateProjectLeaveResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
