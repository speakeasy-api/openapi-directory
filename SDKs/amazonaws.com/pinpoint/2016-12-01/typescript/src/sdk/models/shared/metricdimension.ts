import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetricDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
