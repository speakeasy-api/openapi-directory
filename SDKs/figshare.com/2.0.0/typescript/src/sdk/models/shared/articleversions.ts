import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticleVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
