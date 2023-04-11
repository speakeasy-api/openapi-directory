import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateNatGatewayAddressRequest extends SpeakeasyBase {
    associationIds: string[];
    dryRun?: boolean;
    maxDrainDurationSeconds?: number;
    natGatewayId: string;
}
