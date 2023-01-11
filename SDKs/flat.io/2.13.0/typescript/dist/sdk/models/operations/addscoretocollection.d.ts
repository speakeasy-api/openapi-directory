import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddScoreToCollectionPathParams extends SpeakeasyBase {
    collection: string;
    score: string;
}
export declare class AddScoreToCollectionQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class AddScoreToCollectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddScoreToCollectionRequest extends SpeakeasyBase {
    pathParams: AddScoreToCollectionPathParams;
    queryParams: AddScoreToCollectionQueryParams;
    security: AddScoreToCollectionSecurity;
}
export declare class AddScoreToCollectionResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails;
    statusCode: number;
}
