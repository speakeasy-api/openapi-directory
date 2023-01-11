import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinksPercentilesItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg" })
  avg: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=metric_total" })
  metricTotal: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min: number;

  @SpeakeasyMetadata({ data: "json, name=url_total" })
  urlTotal: number;
}
