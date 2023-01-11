import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the client certificate revocation list.
**/
export declare class ExportClientVpnClientCertificateRevocationListResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class ExportClientVpnClientCertificateRevocationListResult extends SpeakeasyBase {
    certificateRevocationList?: Record<string, any>;
    status?: ExportClientVpnClientCertificateRevocationListResultStatus;
}
