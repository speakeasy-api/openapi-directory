import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomArticleField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_mandatory" })
  isMandatory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
