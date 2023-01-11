import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSubnetCidrReservationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetIpv4CidrReservations?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetIpv6CidrReservations?: Record<string, any>;
}
