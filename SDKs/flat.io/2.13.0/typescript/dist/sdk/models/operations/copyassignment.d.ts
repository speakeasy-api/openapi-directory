import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CopyAssignmentPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
}
export declare class CopyAssignmentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CopyAssignmentRequest extends SpeakeasyBase {
    pathParams: CopyAssignmentPathParams;
    request: shared.AssignmentCopy;
    security: CopyAssignmentSecurity;
}
export declare class CopyAssignmentResponse extends SpeakeasyBase {
    assignment?: shared.Assignment;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
