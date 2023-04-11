import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProvisionPublicIpv4PoolCidrRequest extends SpeakeasyBase {
    dryRun?: boolean;
    ipamPoolId: string;
    netmaskLength: number;
    poolId: string;
}
