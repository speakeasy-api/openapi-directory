import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
 *
 * @remarks
 *
 */
export declare class ScoreCommentContext extends SpeakeasyBase {
    /**
     * The list of measure UUIds
     */
    measureUuids: string[];
    /**
     * The unique identifier (UUID) of the score part
     */
    partUuid: string;
    /**
     * (Deprecated, use `staffUuid`) The identififer of the staff
     */
    staffIdx?: number;
    /**
     * The unique identififer (UUID) of the staff
     */
    staffUuid?: string;
    startDpq: number;
    startTimePos: number;
    stopDpq: number;
    stopTimePos: number;
}
