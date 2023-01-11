import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSolutionMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: Record<string, number>;

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;
}
