import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayTypeEnum } from "./gatewaytypeenum";
/**
 * A gateway is an Backup Gateway appliance that runs on the customer's network to provide seamless connectivity to backup storage in the Amazon Web Services Cloud.
 */
export declare class Gateway extends SpeakeasyBase {
    gatewayArn?: string;
    gatewayDisplayName?: string;
    gatewayType?: GatewayTypeEnum;
    hypervisorId?: string;
    lastSeenTime?: Date;
}
