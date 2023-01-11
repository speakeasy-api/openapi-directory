import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormField } from "./formfield";



// FormAttributes
/** 
 * Attributes of the form including it's included fields and css styles
**/
export class FormAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cssStyles" })
  cssStyles?: string;

  @SpeakeasyMetadata({ data: "json, name=elements", elemType: FormField })
  elements?: FormField[];

  @SpeakeasyMetadata({ data: "json, name=formDescription" })
  formDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=submitButtonText" })
  submitButtonText?: string;

  @SpeakeasyMetadata({ data: "json, name=successMessage" })
  successMessage?: string;
}
