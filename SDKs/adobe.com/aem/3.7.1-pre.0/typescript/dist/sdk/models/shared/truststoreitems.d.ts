import { SpeakeasyBase } from "../../../internal/utils";
export declare class TruststoreItems extends SpeakeasyBase {
    /**
     * Truststore alias name
     */
    alias?: string;
    entryType?: string;
    /**
     * e.g. "CN=Admin"
     */
    issuer?: string;
    /**
     * e.g. "Sun Jun 30 23:59:50 AEST 2019"
     */
    notAfter?: string;
    /**
     * e.g. "Sun Jul 01 12:00:00 AEST 2018"
     */
    notBefore?: string;
    /**
     * 18165099476682912368
     */
    serialNumber?: number;
    /**
     * e.g. "CN=localhost"
     */
    subject?: string;
}
