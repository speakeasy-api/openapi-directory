import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceList } from "./networkinterfacelist";



// VpcEndpointsList
/** 
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
**/
export class VpcEndpointsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkInterfaceList })
  networkInterfaces?: NetworkInterfaceList[];

  @SpeakeasyMetadata()
  vpcEndpointId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
