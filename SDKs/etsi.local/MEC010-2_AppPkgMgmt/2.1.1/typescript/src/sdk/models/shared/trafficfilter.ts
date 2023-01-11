import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrafficFilter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dSCP?: number;

  @SpeakeasyMetadata()
  dstAddress?: string[];

  @SpeakeasyMetadata()
  dstPort?: string[];

  @SpeakeasyMetadata()
  dstTunnelPort?: string[];

  @SpeakeasyMetadata()
  protocol?: string[];

  @SpeakeasyMetadata()
  qCI?: number;

  @SpeakeasyMetadata()
  srcAddress?: string[];

  @SpeakeasyMetadata()
  srcPort?: string[];

  @SpeakeasyMetadata()
  srcTunnelAddress?: string[];

  @SpeakeasyMetadata()
  srcTunnelPort?: string[];

  @SpeakeasyMetadata()
  tC?: number;

  @SpeakeasyMetadata()
  tag?: string[];

  @SpeakeasyMetadata()
  tgtTunnelAddress?: string[];
}
