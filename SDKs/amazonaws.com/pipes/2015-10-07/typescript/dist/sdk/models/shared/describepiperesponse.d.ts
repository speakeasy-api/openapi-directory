import { SpeakeasyBase } from "../../../internal/utils";
import { PipeEnrichmentParameters } from "./pipeenrichmentparameters";
import { PipeSourceParameters } from "./pipesourceparameters";
import { PipeStateEnum } from "./pipestateenum";
import { PipeTargetParameters } from "./pipetargetparameters";
import { RequestedPipeStateDescribeResponseEnum } from "./requestedpipestatedescriberesponseenum";
/**
 * Success
 */
export declare class DescribePipeResponse extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    currentState?: PipeStateEnum;
    description?: string;
    desiredState?: RequestedPipeStateDescribeResponseEnum;
    enrichment?: string;
    enrichmentParameters?: PipeEnrichmentParameters;
    lastModifiedTime?: Date;
    name?: string;
    roleArn?: string;
    source?: string;
    sourceParameters?: PipeSourceParameters;
    stateReason?: string;
    tags?: Record<string, string>;
    target?: string;
    targetParameters?: PipeTargetParameters;
}
