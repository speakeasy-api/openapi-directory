import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArchiveAssignmentPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
}
export declare class ArchiveAssignmentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ArchiveAssignmentRequest extends SpeakeasyBase {
    pathParams: ArchiveAssignmentPathParams;
    security: ArchiveAssignmentSecurity;
}
export declare class ArchiveAssignmentResponse extends SpeakeasyBase {
    assignment?: shared.Assignment;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
