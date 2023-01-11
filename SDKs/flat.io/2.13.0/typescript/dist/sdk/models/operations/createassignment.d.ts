import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAssignmentPathParams extends SpeakeasyBase {
    class: string;
}
export declare class CreateAssignmentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateAssignmentRequest extends SpeakeasyBase {
    pathParams: CreateAssignmentPathParams;
    request?: shared.AssignmentCreation;
    security: CreateAssignmentSecurity;
}
export declare class CreateAssignmentResponse extends SpeakeasyBase {
    assignment?: shared.Assignment;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
