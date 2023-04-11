import { SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGateway } from "./directconnectgateway";
/**
 * Success
 */
export declare class DescribeDirectConnectGatewaysResult extends SpeakeasyBase {
    directConnectGateways?: DirectConnectGateway[];
    nextToken?: string;
}
