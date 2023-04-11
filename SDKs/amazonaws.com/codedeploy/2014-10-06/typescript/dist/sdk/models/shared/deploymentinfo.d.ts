import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { BlueGreenDeploymentConfiguration } from "./bluegreendeploymentconfiguration";
import { ComputePlatformEnum } from "./computeplatformenum";
import { DeploymentCreatorEnum } from "./deploymentcreatorenum";
import { DeploymentOverview } from "./deploymentoverview";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { DeploymentStyle } from "./deploymentstyle";
import { ErrorInformation } from "./errorinformation";
import { FileExistsBehaviorEnum } from "./fileexistsbehaviorenum";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { RelatedDeployments } from "./relateddeployments";
import { RevisionLocation } from "./revisionlocation";
import { RollbackInfo } from "./rollbackinfo";
import { TargetInstances } from "./targetinstances";
/**
 * Information about a deployment.
 */
export declare class DeploymentInfo extends SpeakeasyBase {
    additionalDeploymentStatusInfo?: string;
    applicationName?: string;
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    completeTime?: Date;
    computePlatform?: ComputePlatformEnum;
    createTime?: Date;
    creator?: DeploymentCreatorEnum;
    deploymentConfigName?: string;
    deploymentGroupName?: string;
    deploymentId?: string;
    deploymentOverview?: DeploymentOverview;
    deploymentStatusMessages?: string[];
    deploymentStyle?: DeploymentStyle;
    description?: string;
    errorInformation?: ErrorInformation;
    externalId?: string;
    fileExistsBehavior?: FileExistsBehaviorEnum;
    ignoreApplicationStopFailures?: boolean;
    instanceTerminationWaitTimeStarted?: boolean;
    loadBalancerInfo?: LoadBalancerInfo;
    /**
     * Information about alarms associated with a deployment or deployment group.
     */
    overrideAlarmConfiguration?: AlarmConfiguration;
    previousRevision?: RevisionLocation;
    /**
     * Information about deployments related to the specified deployment.
     */
    relatedDeployments?: RelatedDeployments;
    revision?: RevisionLocation;
    rollbackInfo?: RollbackInfo;
    startTime?: Date;
    status?: DeploymentStatusEnum;
    targetInstances?: TargetInstances;
    updateOutdatedInstancesOnly?: boolean;
}
