import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GerUserLikesSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GerUserLikesRequest extends SpeakeasyBase {
    /**
     * Return only the identifiers of the scores
     */
    ids?: boolean;
    /**
     * Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.
     *
     * @remarks
     *
     */
    user: string;
}
export declare class GerUserLikesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * List of liked scores
     */
    scoreDetails?: shared.ScoreDetails[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
