import { SpeakeasyBase } from "../../../internal/utils";
import { AutoAcceptSharedAttachmentsValueEnum } from "./autoacceptsharedattachmentsvalueenum";
import { DefaultRouteTableAssociationValueEnum } from "./defaultroutetableassociationvalueenum";
import { DefaultRouteTablePropagationValueEnum } from "./defaultroutetablepropagationvalueenum";
import { DnsSupportValueEnum } from "./dnssupportvalueenum";
import { VpnEcmpSupportValueEnum } from "./vpnecmpsupportvalueenum";
/**
 * The transit gateway options.
 */
export declare class ModifyTransitGatewayOptions extends SpeakeasyBase {
    addTransitGatewayCidrBlocks?: string[];
    amazonSideAsn?: number;
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValueEnum;
    defaultRouteTableAssociation?: DefaultRouteTableAssociationValueEnum;
    defaultRouteTablePropagation?: DefaultRouteTablePropagationValueEnum;
    dnsSupport?: DnsSupportValueEnum;
    propagationDefaultRouteTableId?: string;
    removeTransitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: VpnEcmpSupportValueEnum;
}
