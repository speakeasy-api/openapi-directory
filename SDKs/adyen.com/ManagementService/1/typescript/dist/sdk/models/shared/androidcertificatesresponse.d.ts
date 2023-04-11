import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidCertificate } from "./androidcertificate";
/**
 * OK - the request has succeeded.
 */
export declare class AndroidCertificatesResponse extends SpeakeasyBase {
    /**
     * Uploaded Android certificates for Android payment terminals.
     */
    data?: AndroidCertificate[];
}
