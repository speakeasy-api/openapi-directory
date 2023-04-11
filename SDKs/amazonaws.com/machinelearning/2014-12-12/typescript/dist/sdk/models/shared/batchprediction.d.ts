import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>
 */
export declare class BatchPrediction extends SpeakeasyBase {
    batchPredictionDataSourceId?: string;
    batchPredictionId?: string;
    /**
     * Long integer type that is a 64-bit signed number.
     */
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    /**
     * A timestamp represented in epoch time.
     */
    finishedAt?: Date;
    inputDataLocationS3?: string;
    /**
     * Long integer type that is a 64-bit signed number.
     */
    invalidRecordCount?: number;
    lastUpdatedAt?: Date;
    mlModelId?: string;
    message?: string;
    name?: string;
    outputUri?: string;
    /**
     * A timestamp represented in epoch time.
     */
    startedAt?: Date;
    status?: EntityStatusEnum;
    /**
     * Long integer type that is a 64-bit signed number.
     */
    totalRecordCount?: number;
}
