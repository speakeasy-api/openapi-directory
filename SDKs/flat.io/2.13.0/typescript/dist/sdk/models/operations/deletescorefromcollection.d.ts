import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteScoreFromCollectionPathParams extends SpeakeasyBase {
    collection: string;
    score: string;
}
export declare class DeleteScoreFromCollectionQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class DeleteScoreFromCollectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteScoreFromCollectionRequest extends SpeakeasyBase {
    pathParams: DeleteScoreFromCollectionPathParams;
    queryParams: DeleteScoreFromCollectionQueryParams;
    security: DeleteScoreFromCollectionSecurity;
}
export declare class DeleteScoreFromCollectionResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
