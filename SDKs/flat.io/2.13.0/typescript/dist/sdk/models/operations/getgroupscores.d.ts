import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupScoresSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetGroupScoresRequest extends SpeakeasyBase {
    /**
     * Unique identifier of a Flat group
     *
     * @remarks
     *
     */
    group: string;
    /**
     * Filter the score forked from the score id `parent`
     */
    parent?: string;
}
export declare class GetGroupScoresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * The group's scores
     */
    scoreDetails?: shared.ScoreDetails[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
