import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistributionSummaryList } from "./streamingdistributionsummarylist";



// StreamingDistributionList
/** 
 * A streaming distribution list. 
**/
export class StreamingDistributionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated: boolean;

  @SpeakeasyMetadata({ elemType: StreamingDistributionSummaryList })
  items?: StreamingDistributionSummaryList[];

  @SpeakeasyMetadata()
  marker: string;

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
