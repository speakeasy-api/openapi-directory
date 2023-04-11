import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStatusEnum } from "./entitystatusenum";
import { PerformanceMetrics } from "./performancemetrics";
/**
 * <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>
 */
export declare class Evaluation extends SpeakeasyBase {
    /**
     * Long integer type that is a 64-bit signed number.
     */
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    evaluationDataSourceId?: string;
    evaluationId?: string;
    /**
     * A timestamp represented in epoch time.
     */
    finishedAt?: Date;
    inputDataLocationS3?: string;
    lastUpdatedAt?: Date;
    mlModelId?: string;
    message?: string;
    name?: string;
    performanceMetrics?: PerformanceMetrics;
    /**
     * A timestamp represented in epoch time.
     */
    startedAt?: Date;
    status?: EntityStatusEnum;
}
