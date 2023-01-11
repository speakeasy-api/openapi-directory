import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomVerificationEmailTemplate
/** 
 * Contains information about a custom verification email template.
**/
export class CustomVerificationEmailTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failureRedirectionURL?: string;

  @SpeakeasyMetadata()
  fromEmailAddress?: string;

  @SpeakeasyMetadata()
  successRedirectionURL?: string;

  @SpeakeasyMetadata()
  templateName?: string;

  @SpeakeasyMetadata()
  templateSubject?: string;
}
