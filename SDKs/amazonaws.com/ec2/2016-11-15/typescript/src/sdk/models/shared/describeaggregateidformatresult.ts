import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAggregateIdFormatResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  statuses?: Record<string, any>;

  @SpeakeasyMetadata()
  useLongIdsAggregated?: Record<string, any>;
}
