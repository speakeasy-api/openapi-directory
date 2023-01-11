import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticlesCreator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articles" })
  articles: number[];
}
