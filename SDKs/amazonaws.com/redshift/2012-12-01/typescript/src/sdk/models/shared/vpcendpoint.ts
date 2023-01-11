import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceList } from "./networkinterfacelist";



// VpcEndpoint
/** 
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
**/
export class VpcEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkInterfaceList })
  networkInterfaces?: NetworkInterfaceList[];

  @SpeakeasyMetadata()
  vpcEndpointId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
