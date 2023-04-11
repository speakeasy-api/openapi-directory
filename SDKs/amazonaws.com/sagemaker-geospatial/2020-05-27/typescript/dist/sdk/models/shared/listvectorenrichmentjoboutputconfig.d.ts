import { SpeakeasyBase } from "../../../internal/utils";
import { VectorEnrichmentJobStatusEnum } from "./vectorenrichmentjobstatusenum";
import { VectorEnrichmentJobTypeEnum } from "./vectorenrichmentjobtypeenum";
/**
 * An object containing information about the output file.
 */
export declare class ListVectorEnrichmentJobOutputConfig extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    durationInSeconds: number;
    name: string;
    status: VectorEnrichmentJobStatusEnum;
    tags?: Record<string, string>;
    type: VectorEnrichmentJobTypeEnum;
}
