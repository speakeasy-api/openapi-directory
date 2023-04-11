import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLocalGatewayRouteRequest extends SpeakeasyBase {
    destinationCidrBlock?: string;
    destinationPrefixListId?: string;
    dryRun?: boolean;
    localGatewayRouteTableId: string;
}
