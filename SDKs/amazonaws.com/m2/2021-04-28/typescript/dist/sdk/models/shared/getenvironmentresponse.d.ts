import { SpeakeasyBase } from "../../../internal/utils";
import { EngineTypeEnum } from "./enginetypeenum";
import { EnvironmentLifecycleEnum } from "./environmentlifecycleenum";
import { HighAvailabilityConfig } from "./highavailabilityconfig";
import { PendingMaintenance } from "./pendingmaintenance";
import { StorageConfiguration } from "./storageconfiguration";
/**
 * Success
 */
export declare class GetEnvironmentResponse extends SpeakeasyBase {
    actualCapacity?: number;
    creationTime: Date;
    description?: string;
    engineType: EngineTypeEnum;
    engineVersion: string;
    environmentArn: string;
    environmentId: string;
    highAvailabilityConfig?: HighAvailabilityConfig;
    instanceType: string;
    kmsKeyId?: string;
    loadBalancerArn?: string;
    name: string;
    pendingMaintenance?: PendingMaintenance;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    securityGroupIds: string[];
    status: EnvironmentLifecycleEnum;
    statusReason?: string;
    storageConfigurations?: StorageConfiguration[];
    subnetIds: string[];
    tags?: Record<string, string>;
    vpcId: string;
}
