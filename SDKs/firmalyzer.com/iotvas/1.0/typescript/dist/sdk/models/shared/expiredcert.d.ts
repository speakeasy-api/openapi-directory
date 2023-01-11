import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExpiredCertPublicKey extends SpeakeasyBase {
    algorithm?: string;
    bits?: number;
}
export declare class ExpiredCert extends SpeakeasyBase {
    fileHash?: string;
    fileName?: string;
    publicKey?: ExpiredCertPublicKey;
    subjectName?: string;
    thumbPrint?: string;
    validFrom?: string;
    validTo?: string;
}
