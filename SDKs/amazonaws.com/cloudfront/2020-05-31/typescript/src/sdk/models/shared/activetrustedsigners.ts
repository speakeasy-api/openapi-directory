import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SignerList } from "./signerlist";



// ActiveTrustedSigners
/** 
 * A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export class ActiveTrustedSigners extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata({ elemType: SignerList })
  items?: SignerList[];

  @SpeakeasyMetadata()
  quantity: number;
}
