import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSpotFleetRequestHistoryResponse
/** 
 * Contains the output of DescribeSpotFleetRequestHistory.
**/
export class DescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  historyRecords?: Record<string, any>;

  @SpeakeasyMetadata()
  lastEvaluatedTime?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  spotFleetRequestId?: Record<string, any>;

  @SpeakeasyMetadata()
  startTime?: Record<string, any>;
}
