import { SpeakeasyBase } from "../../../internal/utils";
import { CreateTransitGatewayVpcAttachmentRequestOptions } from "./createtransitgatewayvpcattachmentrequestoptions";
import { TagSpecificationList } from "./tagspecificationlist";
export declare class CreateTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    dryRun?: boolean;
    options?: CreateTransitGatewayVpcAttachmentRequestOptions;
    subnetIds: string[];
    tagSpecifications?: TagSpecificationList[];
    transitGatewayId: string;
    vpcId: string;
}
