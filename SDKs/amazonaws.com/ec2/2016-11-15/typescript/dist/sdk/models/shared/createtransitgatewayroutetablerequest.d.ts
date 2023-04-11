import { SpeakeasyBase } from "../../../internal/utils";
import { TagSpecificationList } from "./tagspecificationlist";
export declare class CreateTransitGatewayRouteTableRequest extends SpeakeasyBase {
    dryRun?: boolean;
    tagSpecifications?: TagSpecificationList[];
    transitGatewayId: string;
}
