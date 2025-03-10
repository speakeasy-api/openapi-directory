import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";
/**
 * Success
 */
export declare class DescribeGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
    capabilityConfiguration: string;
    capabilityNamespace: string;
    capabilitySyncStatus: CapabilitySyncStatusEnum;
    gatewayId: string;
}
