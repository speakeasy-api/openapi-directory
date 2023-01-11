import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInterfaceList
/** 
 * Describes a network interface. 
**/
export class NetworkInterfaceList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;

  @SpeakeasyMetadata()
  subnetId?: string;
}
