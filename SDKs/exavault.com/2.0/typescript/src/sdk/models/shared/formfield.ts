import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FormFieldSettings
/** 
 * Advanced field settings
**/
export class FormFieldSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=senderEmail" })
  senderEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useAsFolderName" })
  useAsFolderName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class FormField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: FormFieldSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: any;
}
