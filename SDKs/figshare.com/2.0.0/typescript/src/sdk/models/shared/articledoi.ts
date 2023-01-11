import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticleDoi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;
}
