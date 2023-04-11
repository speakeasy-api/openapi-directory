import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    dryRun?: boolean;
    subnetIds: string[];
    transitGatewayAttachmentId: string;
    transitGatewayMulticastDomainId: string;
}
