import { SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAssociation } from "./directconnectgatewayassociation";
/**
 * Success
 */
export declare class DescribeDirectConnectGatewayAssociationsResult extends SpeakeasyBase {
    directConnectGatewayAssociations?: DirectConnectGatewayAssociation[];
    nextToken?: string;
}
