import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UntrashScorePathParams extends SpeakeasyBase {
    score: string;
}
export declare class UntrashScoreSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UntrashScoreRequest extends SpeakeasyBase {
    pathParams: UntrashScorePathParams;
    security: UntrashScoreSecurity;
}
export declare class UntrashScoreResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
