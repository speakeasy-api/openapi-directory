import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// HsmClientCertificate
/** 
 * Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
**/
export class HsmClientCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hsmClientCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  hsmClientCertificatePublicKey?: string;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}
