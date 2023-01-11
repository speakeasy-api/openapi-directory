import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { Share } from "./share";



// FormResponse
/** 
 * Response object for forms.
**/
export class FormResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Form;

  @SpeakeasyMetadata({ data: "json, name=included", elemType: Share })
  included?: Share[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
