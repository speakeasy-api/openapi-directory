import { SpeakeasyBase } from "../../../internal/utils";
import { VectorEnrichmentJobConfig } from "./vectorenrichmentjobconfig";
import { VectorEnrichmentJobInputConfig } from "./vectorenrichmentjobinputconfig";
import { VectorEnrichmentJobStatusEnum } from "./vectorenrichmentjobstatusenum";
import { VectorEnrichmentJobTypeEnum } from "./vectorenrichmentjobtypeenum";
/**
 * Success
 */
export declare class StartVectorEnrichmentJobOutput extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    durationInSeconds: number;
    executionRoleArn: string;
    inputConfig: VectorEnrichmentJobInputConfig;
    jobConfig: VectorEnrichmentJobConfig;
    kmsKeyId?: string;
    name: string;
    status: VectorEnrichmentJobStatusEnum;
    tags?: Record<string, string>;
    type: VectorEnrichmentJobTypeEnum;
}
