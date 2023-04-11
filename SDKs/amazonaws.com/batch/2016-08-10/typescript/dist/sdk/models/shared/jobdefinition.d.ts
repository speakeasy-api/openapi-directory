import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerProperties } from "./containerproperties";
import { EksProperties } from "./eksproperties";
import { JobTimeout } from "./jobtimeout";
import { NodeProperties } from "./nodeproperties";
import { OrchestrationTypeEnum } from "./orchestrationtypeenum";
import { PlatformCapabilityEnum } from "./platformcapabilityenum";
import { RetryStrategy } from "./retrystrategy";
/**
 * An object that represents an Batch job definition.
 */
export declare class JobDefinition extends SpeakeasyBase {
    containerOrchestrationType?: OrchestrationTypeEnum;
    containerProperties?: ContainerProperties;
    eksProperties?: EksProperties;
    jobDefinitionArn: string;
    jobDefinitionName: string;
    nodeProperties?: NodeProperties;
    parameters?: Record<string, string>;
    platformCapabilities?: PlatformCapabilityEnum[];
    propagateTags?: boolean;
    retryStrategy?: RetryStrategy;
    revision: number;
    schedulingPriority?: number;
    status?: string;
    tags?: Record<string, string>;
    timeout?: JobTimeout;
    type: string;
}
