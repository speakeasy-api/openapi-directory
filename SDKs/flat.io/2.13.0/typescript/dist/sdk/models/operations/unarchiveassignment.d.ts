import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnarchiveAssignmentPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
}
export declare class UnarchiveAssignmentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UnarchiveAssignmentRequest extends SpeakeasyBase {
    pathParams: UnarchiveAssignmentPathParams;
    security: UnarchiveAssignmentSecurity;
}
export declare class UnarchiveAssignmentResponse extends SpeakeasyBase {
    assignment?: shared.Assignment;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
