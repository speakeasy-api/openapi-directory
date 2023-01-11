import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
 *
**/
export declare class ScoreCommentContext extends SpeakeasyBase {
    measureUuids: string[];
    partUuid: string;
    staffIdx?: number;
    staffUuid?: string;
    startDpq: number;
    startTimePos: number;
    stopDpq: number;
    stopTimePos: number;
}
