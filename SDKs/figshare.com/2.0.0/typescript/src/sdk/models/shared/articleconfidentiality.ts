import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticleConfidentiality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_confidential" })
  isConfidential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
