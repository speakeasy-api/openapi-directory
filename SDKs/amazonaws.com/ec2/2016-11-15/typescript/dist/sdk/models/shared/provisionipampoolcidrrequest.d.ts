import { SpeakeasyBase } from "../../../internal/utils";
import { IpamCidrAuthorizationContext } from "./ipamcidrauthorizationcontext";
export declare class ProvisionIpamPoolCidrRequest extends SpeakeasyBase {
    cidr?: string;
    cidrAuthorizationContext?: IpamCidrAuthorizationContext;
    clientToken?: string;
    dryRun?: boolean;
    ipamPoolId: string;
    netmaskLength?: number;
}
