import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MicrosoftGraphSubmission
/** 
 * A Microsoft Teams submission
**/
export class MicrosoftGraphSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
