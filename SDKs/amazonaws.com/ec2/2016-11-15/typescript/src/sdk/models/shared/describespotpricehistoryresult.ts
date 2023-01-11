import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSpotPriceHistoryResult
/** 
 * Contains the output of DescribeSpotPriceHistory.
**/
export class DescribeSpotPriceHistoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  spotPriceHistory?: Record<string, any>;
}
