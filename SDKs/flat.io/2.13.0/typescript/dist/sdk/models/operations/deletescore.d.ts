import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteScorePathParams extends SpeakeasyBase {
    score: string;
}
export declare class DeleteScoreQueryParams extends SpeakeasyBase {
    now?: boolean;
}
export declare class DeleteScoreSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteScoreRequest extends SpeakeasyBase {
    pathParams: DeleteScorePathParams;
    queryParams: DeleteScoreQueryParams;
    security: DeleteScoreSecurity;
}
export declare class DeleteScoreResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
