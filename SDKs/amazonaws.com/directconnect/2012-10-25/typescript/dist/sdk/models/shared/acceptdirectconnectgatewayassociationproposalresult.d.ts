import { SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAssociation } from "./directconnectgatewayassociation";
/**
 * Success
 */
export declare class AcceptDirectConnectGatewayAssociationProposalResult extends SpeakeasyBase {
    /**
     * Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
     */
    directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}
