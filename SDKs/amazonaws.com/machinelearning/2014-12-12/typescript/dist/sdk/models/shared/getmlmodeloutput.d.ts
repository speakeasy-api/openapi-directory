import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStatusEnum } from "./entitystatusenum";
import { MLModelTypeEnum } from "./mlmodeltypeenum";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
/**
 * Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.
 */
export declare class GetMLModelOutput extends SpeakeasyBase {
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    endpointInfo?: RealtimeEndpointInfo;
    finishedAt?: Date;
    inputDataLocationS3?: string;
    lastUpdatedAt?: Date;
    logUri?: string;
    mlModelId?: string;
    mlModelType?: MLModelTypeEnum;
    message?: string;
    name?: string;
    recipe?: string;
    schema?: string;
    scoreThreshold?: number;
    scoreThresholdLastUpdatedAt?: Date;
    /**
     * Long integer type that is a 64-bit signed number.
     */
    sizeInBytes?: number;
    startedAt?: Date;
    status?: EntityStatusEnum;
    trainingDataSourceId?: string;
    trainingParameters?: Record<string, string>;
}
