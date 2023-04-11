import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllocateIpamPoolCidrRequest extends SpeakeasyBase {
    cidr?: string;
    clientToken?: string;
    description?: string;
    disallowedCidrs?: string[];
    dryRun?: boolean;
    ipamPoolId: string;
    netmaskLength?: number;
    previewNextCidr?: boolean;
}
