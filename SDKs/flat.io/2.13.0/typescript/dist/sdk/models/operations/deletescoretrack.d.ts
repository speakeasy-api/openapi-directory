import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteScoreTrackPathParams extends SpeakeasyBase {
    score: string;
    track: string;
}
export declare class DeleteScoreTrackSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteScoreTrackRequest extends SpeakeasyBase {
    pathParams: DeleteScoreTrackPathParams;
    security: DeleteScoreTrackSecurity;
}
export declare class DeleteScoreTrackResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
