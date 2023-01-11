import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateScoreRevisionPathParams extends SpeakeasyBase {
    score: string;
}
export declare class CreateScoreRevisionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateScoreRevisionRequest extends SpeakeasyBase {
    pathParams: CreateScoreRevisionPathParams;
    request: shared.ScoreRevisionCreation;
    security: CreateScoreRevisionSecurity;
}
export declare class CreateScoreRevisionResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreRevision?: shared.ScoreRevision;
    statusCode: number;
}
