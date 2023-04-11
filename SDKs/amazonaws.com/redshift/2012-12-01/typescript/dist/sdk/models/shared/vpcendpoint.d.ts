import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceList } from "./networkinterfacelist";
/**
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
 */
export declare class VpcEndpoint extends SpeakeasyBase {
    networkInterfaces?: NetworkInterfaceList[];
    vpcEndpointId?: string;
    vpcId?: string;
}
