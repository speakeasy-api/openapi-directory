import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeElasticGpusResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  elasticGpuSet?: Record<string, any>;

  @SpeakeasyMetadata()
  maxResults?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
