import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmEnum } from "./algorithmenum";
import { EntityStatusEnum } from "./entitystatusenum";
import { MLModelTypeEnum } from "./mlmodeltypeenum";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
/**
 * <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
 */
export declare class MLModel extends SpeakeasyBase {
    algorithm?: AlgorithmEnum;
    /**
     * Long integer type that is a 64-bit signed number.
     */
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    endpointInfo?: RealtimeEndpointInfo;
    /**
     * A timestamp represented in epoch time.
     */
    finishedAt?: Date;
    inputDataLocationS3?: string;
    lastUpdatedAt?: Date;
    mlModelId?: string;
    mlModelType?: MLModelTypeEnum;
    message?: string;
    name?: string;
    scoreThreshold?: number;
    scoreThresholdLastUpdatedAt?: Date;
    /**
     * Long integer type that is a 64-bit signed number.
     */
    sizeInBytes?: number;
    /**
     * A timestamp represented in epoch time.
     */
    startedAt?: Date;
    status?: EntityStatusEnum;
    trainingDataSourceId?: string;
    trainingParameters?: Record<string, string>;
}
