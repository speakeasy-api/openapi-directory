import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";
/**
 * Success
 */
export declare class UpdateGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
    capabilityNamespace: string;
    capabilitySyncStatus: CapabilitySyncStatusEnum;
}
