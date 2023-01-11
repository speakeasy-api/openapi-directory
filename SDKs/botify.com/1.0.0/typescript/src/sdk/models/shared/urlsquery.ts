import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UrlsQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: Record<string, any>[];
}
