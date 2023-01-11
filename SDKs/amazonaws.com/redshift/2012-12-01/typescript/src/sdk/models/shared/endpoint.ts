import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointsList } from "./vpcendpointslist";



// Endpoint
/** 
 * Describes a connection endpoint.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: VpcEndpointsList })
  vpcEndpoints?: VpcEndpointsList[];
}
