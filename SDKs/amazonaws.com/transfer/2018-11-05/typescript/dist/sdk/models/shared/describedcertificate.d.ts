import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateStatusTypeEnum } from "./certificatestatustypeenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
import { CertificateUsageTypeEnum } from "./certificateusagetypeenum";
import { Tag } from "./tag";
/**
 * Describes the properties of a certificate.
 */
export declare class DescribedCertificate extends SpeakeasyBase {
    activeDate?: Date;
    arn: string;
    certificate?: string;
    certificateChain?: string;
    certificateId?: string;
    description?: string;
    inactiveDate?: Date;
    notAfterDate?: Date;
    notBeforeDate?: Date;
    serial?: string;
    status?: CertificateStatusTypeEnum;
    tags?: Tag[];
    type?: CertificateTypeEnum;
    usage?: CertificateUsageTypeEnum;
}
