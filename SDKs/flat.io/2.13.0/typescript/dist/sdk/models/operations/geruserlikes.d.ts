import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GerUserLikesPathParams extends SpeakeasyBase {
    user: string;
}
export declare class GerUserLikesQueryParams extends SpeakeasyBase {
    ids?: boolean;
}
export declare class GerUserLikesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GerUserLikesRequest extends SpeakeasyBase {
    pathParams: GerUserLikesPathParams;
    queryParams: GerUserLikesQueryParams;
    security: GerUserLikesSecurity;
}
export declare class GerUserLikesResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreDetails?: shared.ScoreDetails[];
    statusCode: number;
}
