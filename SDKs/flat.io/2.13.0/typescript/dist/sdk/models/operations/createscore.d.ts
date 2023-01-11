import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateScoreSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateScoreRequest extends SpeakeasyBase {
    request: shared.ScoreCreation;
    security: CreateScoreSecurity;
}
export declare class CreateScoreResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails;
    statusCode: number;
}
