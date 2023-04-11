import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateStatusTypeEnum } from "./certificatestatustypeenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
import { CertificateUsageTypeEnum } from "./certificateusagetypeenum";
/**
 * Describes the properties of a certificate.
 */
export declare class ListedCertificate extends SpeakeasyBase {
    activeDate?: Date;
    arn?: string;
    certificateId?: string;
    description?: string;
    inactiveDate?: Date;
    status?: CertificateStatusTypeEnum;
    type?: CertificateTypeEnum;
    usage?: CertificateUsageTypeEnum;
}
