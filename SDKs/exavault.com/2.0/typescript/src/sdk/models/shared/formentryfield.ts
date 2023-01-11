import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FormEntryField
/** 
 * Attributes of the form including its included fields and css styles
**/
export class FormEntryField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
