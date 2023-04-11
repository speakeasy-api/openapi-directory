import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConnector } from "./vpcconnector";
/**
 * Success
 */
export declare class ListVpcConnectorsResponse extends SpeakeasyBase {
    nextToken?: string;
    vpcConnectors: VpcConnector[];
}
