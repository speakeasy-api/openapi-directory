import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserScoresSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetUserScoresRequest extends SpeakeasyBase {
    /**
     * Filter the score forked from the score id `parent`
     */
    parent?: string;
    /**
     * Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.
     *
     * @remarks
     *
     */
    user: string;
}
export declare class GetUserScoresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * The user scores
     */
    scoreDetails?: shared.ScoreDetails[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
