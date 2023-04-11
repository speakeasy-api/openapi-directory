import { SpeakeasyBase } from "../../../internal/utils";
import { HostRoleEnum } from "./hostroleenum";
/**
 * Describes the properties of the Dedicated Host.
 */
export declare class Host extends SpeakeasyBase {
    hostIp?: string;
    hostName?: string;
    hostRole?: HostRoleEnum;
    instanceId?: string;
}
