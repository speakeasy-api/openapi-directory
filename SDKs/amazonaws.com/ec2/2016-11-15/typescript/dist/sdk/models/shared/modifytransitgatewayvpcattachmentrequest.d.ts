import { SpeakeasyBase } from "../../../internal/utils";
import { ModifyTransitGatewayVpcAttachmentRequestOptions } from "./modifytransitgatewayvpcattachmentrequestoptions";
export declare class ModifyTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    addSubnetIds?: string[];
    dryRun?: boolean;
    options?: ModifyTransitGatewayVpcAttachmentRequestOptions;
    removeSubnetIds?: string[];
    transitGatewayAttachmentId: string;
}
