import { SpeakeasyBase } from "../../../internal/utils";
import { TagSpecificationList } from "./tagspecificationlist";
export declare class CreateTransitGatewayPolicyTableRequest extends SpeakeasyBase {
    dryRun?: boolean;
    tagSpecifications?: TagSpecificationList[];
    transitGatewayId: string;
}
