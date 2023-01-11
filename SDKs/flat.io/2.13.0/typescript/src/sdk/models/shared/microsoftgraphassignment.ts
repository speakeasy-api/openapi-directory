import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MicrosoftGraphAssignment
/** 
 * A Microsoft Teams asignment
**/
export class MicrosoftGraphAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
