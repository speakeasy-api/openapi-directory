import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyLocalGatewayRouteRequest extends SpeakeasyBase {
    destinationCidrBlock?: string;
    destinationPrefixListId?: string;
    dryRun?: boolean;
    localGatewayRouteTableId: string;
    localGatewayVirtualInterfaceGroupId?: string;
    networkInterfaceId?: string;
}
