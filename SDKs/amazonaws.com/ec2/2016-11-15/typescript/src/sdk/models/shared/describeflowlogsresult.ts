import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFlowLogsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  flowLogs?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
