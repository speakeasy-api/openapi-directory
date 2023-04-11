import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateNatGatewayAddressRequest extends SpeakeasyBase {
    allocationIds: string[];
    dryRun?: boolean;
    natGatewayId: string;
    privateIpAddresses?: string[];
}
