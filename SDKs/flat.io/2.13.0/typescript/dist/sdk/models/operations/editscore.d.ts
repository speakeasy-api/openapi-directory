import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditScorePathParams extends SpeakeasyBase {
    score: string;
}
export declare class EditScoreSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class EditScoreRequest extends SpeakeasyBase {
    pathParams: EditScorePathParams;
    request?: shared.ScoreModification;
    security: EditScoreSecurity;
}
export declare class EditScoreResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails;
    statusCode: number;
}
