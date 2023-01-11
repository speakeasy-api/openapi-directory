import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnalyticsProductColumnFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
