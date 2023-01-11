import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormEntry } from "./formentry";



// FormEntryResponse
/** 
 * Response object of the form data.
**/
export class FormEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: FormEntry })
  data?: FormEntry[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=returnedResults" })
  returnedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
