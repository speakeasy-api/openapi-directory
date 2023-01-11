import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsmClientCertificateList } from "./hsmclientcertificatelist";



// HsmClientCertificateMessage
/** 
 * <p/>
**/
export class HsmClientCertificateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: HsmClientCertificateList })
  hsmClientCertificates?: HsmClientCertificateList[];

  @SpeakeasyMetadata()
  marker?: string;
}
