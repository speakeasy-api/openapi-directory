import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateList
/** 
 * A certificate authority (CA) certificate for an account.
**/
export class CertificateList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateArn?: string;

  @SpeakeasyMetadata()
  certificateIdentifier?: string;

  @SpeakeasyMetadata()
  certificateType?: string;

  @SpeakeasyMetadata()
  thumbprint?: string;

  @SpeakeasyMetadata()
  validFrom?: Date;

  @SpeakeasyMetadata()
  validTill?: Date;
}
