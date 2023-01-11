import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCustomVerificationEmailTemplateResponse
/** 
 * The content of the custom verification email template.
**/
export class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failureRedirectionURL?: string;

  @SpeakeasyMetadata()
  fromEmailAddress?: string;

  @SpeakeasyMetadata()
  successRedirectionURL?: string;

  @SpeakeasyMetadata()
  templateContent?: string;

  @SpeakeasyMetadata()
  templateName?: string;

  @SpeakeasyMetadata()
  templateSubject?: string;
}
