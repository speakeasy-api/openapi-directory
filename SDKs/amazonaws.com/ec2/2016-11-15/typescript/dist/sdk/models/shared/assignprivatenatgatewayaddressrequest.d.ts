import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssignPrivateNatGatewayAddressRequest extends SpeakeasyBase {
    dryRun?: boolean;
    natGatewayId: string;
    privateIpAddressCount?: number;
    privateIpAddresses?: string[];
}
