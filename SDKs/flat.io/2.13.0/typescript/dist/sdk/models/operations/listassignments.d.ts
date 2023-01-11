import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssignmentsPathParams extends SpeakeasyBase {
    class: string;
}
export declare class ListAssignmentsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListAssignmentsRequest extends SpeakeasyBase {
    pathParams: ListAssignmentsPathParams;
    security: ListAssignmentsSecurity;
}
export declare class ListAssignmentsResponse extends SpeakeasyBase {
    assignments?: shared.Assignment[];
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
