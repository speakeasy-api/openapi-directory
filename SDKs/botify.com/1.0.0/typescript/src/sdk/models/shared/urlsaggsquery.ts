import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UrlsAggsQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggs" })
  aggs?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;
}
