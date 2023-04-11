import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayTypeEnum } from "./gatewaytypeenum";
import { MaintenanceStartTime } from "./maintenancestarttime";
/**
 * The details of gateway.
 */
export declare class GatewayDetails extends SpeakeasyBase {
    gatewayArn?: string;
    gatewayDisplayName?: string;
    gatewayType?: GatewayTypeEnum;
    hypervisorId?: string;
    lastSeenTime?: Date;
    maintenanceStartTime?: MaintenanceStartTime;
    nextUpdateAvailabilityTime?: Date;
    vpcEndpoint?: string;
}
