import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFleetHistoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fleetId?: Record<string, any>;

  @SpeakeasyMetadata()
  historyRecords?: Record<string, any>;

  @SpeakeasyMetadata()
  lastEvaluatedTime?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  startTime?: Record<string, any>;
}
