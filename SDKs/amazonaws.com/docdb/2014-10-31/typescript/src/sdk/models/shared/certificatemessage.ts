import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateList } from "./certificatelist";



export class CertificateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CertificateList })
  certificates?: CertificateList[];

  @SpeakeasyMetadata()
  marker?: string;
}
