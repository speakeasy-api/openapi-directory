import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    dryRun?: boolean;
    subnetIds: string[];
    transitGatewayAttachmentId: string;
    transitGatewayMulticastDomainId: string;
}
