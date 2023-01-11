import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSubmissionPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
    submission: string;
}
export declare class DeleteSubmissionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteSubmissionRequest extends SpeakeasyBase {
    pathParams: DeleteSubmissionPathParams;
    security: DeleteSubmissionSecurity;
}
export declare class DeleteSubmissionResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
