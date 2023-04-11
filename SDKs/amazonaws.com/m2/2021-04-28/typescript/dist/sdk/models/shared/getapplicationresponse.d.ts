import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationLifecycleEnum } from "./applicationlifecycleenum";
import { ApplicationVersionSummary } from "./applicationversionsummary";
import { DeployedVersionSummary } from "./deployedversionsummary";
import { EngineTypeEnum } from "./enginetypeenum";
import { LogGroupSummary } from "./loggroupsummary";
/**
 * Success
 */
export declare class GetApplicationResponse extends SpeakeasyBase {
    applicationArn: string;
    applicationId: string;
    creationTime: Date;
    deployedVersion?: DeployedVersionSummary;
    description?: string;
    engineType: EngineTypeEnum;
    environmentId?: string;
    kmsKeyId?: string;
    lastStartTime?: Date;
    latestVersion: ApplicationVersionSummary;
    listenerArns?: string[];
    listenerPorts?: number[];
    loadBalancerDnsName?: string;
    logGroups?: LogGroupSummary[];
    name: string;
    status: ApplicationLifecycleEnum;
    statusReason?: string;
    tags?: Record<string, string>;
    targetGroupArns?: string[];
}
