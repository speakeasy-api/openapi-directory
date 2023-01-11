import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportClientVpnClientCertificateRevocationListResultStatus
/** 
 * The current state of the client certificate revocation list.
**/
export class ExportClientVpnClientCertificateRevocationListResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class ExportClientVpnClientCertificateRevocationListResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateRevocationList?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: ExportClientVpnClientCertificateRevocationListResultStatus;
}
