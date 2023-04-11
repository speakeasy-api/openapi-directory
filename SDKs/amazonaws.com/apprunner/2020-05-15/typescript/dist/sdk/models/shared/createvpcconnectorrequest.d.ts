import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateVpcConnectorRequest extends SpeakeasyBase {
    securityGroups?: string[];
    subnets: string[];
    tags?: Tag[];
    vpcConnectorName: string;
}
