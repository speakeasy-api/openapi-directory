import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the client certificate revocation list.
 */
export declare enum ExportClientVpnClientCertificateRevocationListResultStatusCodeEnum {
    Pending = "pending",
    Active = "active"
}
/**
 * The current state of the client certificate revocation list.
 */
export declare class ExportClientVpnClientCertificateRevocationListResultStatus extends SpeakeasyBase {
    code?: ExportClientVpnClientCertificateRevocationListResultStatusCodeEnum;
    message?: string;
}
/**
 * Success
 */
export declare class ExportClientVpnClientCertificateRevocationListResult extends SpeakeasyBase {
    certificateRevocationList?: string;
    status?: ExportClientVpnClientCertificateRevocationListResultStatus;
}
