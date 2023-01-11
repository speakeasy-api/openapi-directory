import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateList } from "./certificatelist";



// CertificateMessage
/** 
 * Data returned by the <b>DescribeCertificates</b> action.
**/
export class CertificateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CertificateList })
  certificates?: CertificateList[];

  @SpeakeasyMetadata()
  marker?: string;
}
