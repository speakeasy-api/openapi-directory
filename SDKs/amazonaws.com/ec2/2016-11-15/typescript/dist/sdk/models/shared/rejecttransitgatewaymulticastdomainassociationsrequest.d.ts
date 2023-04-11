import { SpeakeasyBase } from "../../../internal/utils";
export declare class RejectTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    subnetIds?: string[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
}
