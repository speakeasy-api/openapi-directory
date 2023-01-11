import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
