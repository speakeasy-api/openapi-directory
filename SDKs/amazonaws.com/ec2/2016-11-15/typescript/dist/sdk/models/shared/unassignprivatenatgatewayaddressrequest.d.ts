import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnassignPrivateNatGatewayAddressRequest extends SpeakeasyBase {
    dryRun?: boolean;
    maxDrainDurationSeconds?: number;
    natGatewayId: string;
    privateIpAddresses: string[];
}
