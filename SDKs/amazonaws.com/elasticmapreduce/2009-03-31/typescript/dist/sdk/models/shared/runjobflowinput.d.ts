import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
import { AutoTerminationPolicy } from "./autoterminationpolicy";
import { BootstrapActionConfig } from "./bootstrapactionconfig";
import { Configuration } from "./configuration";
import { JobFlowInstancesConfig } from "./jobflowinstancesconfig";
import { KerberosAttributes } from "./kerberosattributes";
import { ManagedScalingPolicy } from "./managedscalingpolicy";
import { PlacementGroupConfig } from "./placementgroupconfig";
import { RepoUpgradeOnBootEnum } from "./repoupgradeonbootenum";
import { ScaleDownBehaviorEnum } from "./scaledownbehaviorenum";
import { StepConfig } from "./stepconfig";
import { SupportedProductConfig } from "./supportedproductconfig";
import { Tag } from "./tag";
/**
 *  Input to the <a>RunJobFlow</a> operation.
 */
export declare class RunJobFlowInput extends SpeakeasyBase {
    additionalInfo?: string;
    amiVersion?: string;
    applications?: Application[];
    autoScalingRole?: string;
    /**
     * An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.
     */
    autoTerminationPolicy?: AutoTerminationPolicy;
    bootstrapActions?: BootstrapActionConfig[];
    configurations?: Configuration[];
    customAmiId?: string;
    ebsRootVolumeSize?: number;
    instances: JobFlowInstancesConfig;
    jobFlowRole?: string;
    kerberosAttributes?: KerberosAttributes;
    logEncryptionKmsKeyId?: string;
    logUri?: string;
    managedScalingPolicy?: ManagedScalingPolicy;
    name: string;
    newSupportedProducts?: SupportedProductConfig[];
    osReleaseLabel?: string;
    placementGroupConfigs?: PlacementGroupConfig[];
    releaseLabel?: string;
    repoUpgradeOnBoot?: RepoUpgradeOnBootEnum;
    scaleDownBehavior?: ScaleDownBehaviorEnum;
    securityConfiguration?: string;
    serviceRole?: string;
    stepConcurrencyLevel?: number;
    steps?: StepConfig[];
    supportedProducts?: string[];
    tags?: Tag[];
    visibleToAllUsers?: boolean;
}
