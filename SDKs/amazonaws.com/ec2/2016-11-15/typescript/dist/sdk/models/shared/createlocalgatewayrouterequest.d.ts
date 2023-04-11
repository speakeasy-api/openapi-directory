import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateLocalGatewayRouteRequest extends SpeakeasyBase {
    destinationCidrBlock?: string;
    destinationPrefixListId?: string;
    dryRun?: boolean;
    localGatewayRouteTableId: string;
    localGatewayVirtualInterfaceGroupId?: string;
    networkInterfaceId?: string;
}
