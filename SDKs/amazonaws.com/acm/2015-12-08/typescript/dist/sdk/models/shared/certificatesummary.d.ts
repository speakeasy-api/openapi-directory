import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
import { ExtendedKeyUsageNameEnum } from "./extendedkeyusagenameenum";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { KeyUsageNameEnum } from "./keyusagenameenum";
import { RenewalEligibilityEnum } from "./renewaleligibilityenum";
/**
 * This structure is returned in the response object of <a>ListCertificates</a> action.
 */
export declare class CertificateSummary extends SpeakeasyBase {
    certificateArn?: string;
    createdAt?: Date;
    domainName?: string;
    exported?: boolean;
    extendedKeyUsages?: ExtendedKeyUsageNameEnum[];
    hasAdditionalSubjectAlternativeNames?: boolean;
    importedAt?: Date;
    inUse?: boolean;
    issuedAt?: Date;
    keyAlgorithm?: KeyAlgorithmEnum;
    keyUsages?: KeyUsageNameEnum[];
    notAfter?: Date;
    notBefore?: Date;
    renewalEligibility?: RenewalEligibilityEnum;
    revokedAt?: Date;
    status?: CertificateStatusEnum;
    subjectAlternativeNameSummaries?: string[];
    type?: CertificateTypeEnum;
}
