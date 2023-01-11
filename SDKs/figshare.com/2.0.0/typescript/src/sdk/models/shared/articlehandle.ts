import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticleHandle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=handle" })
  handle?: string;
}
