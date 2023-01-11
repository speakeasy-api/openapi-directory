import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionSummaryList } from "./distributionsummarylist";



// DistributionList
/** 
 * A distribution list.
**/
export class DistributionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated: boolean;

  @SpeakeasyMetadata({ elemType: DistributionSummaryList })
  items?: DistributionSummaryList[];

  @SpeakeasyMetadata()
  marker: string;

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
