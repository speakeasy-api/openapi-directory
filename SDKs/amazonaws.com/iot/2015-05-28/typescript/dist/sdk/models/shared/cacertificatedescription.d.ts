import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRegistrationStatusEnum } from "./autoregistrationstatusenum";
import { CACertificateStatusEnum } from "./cacertificatestatusenum";
import { CertificateModeEnum } from "./certificatemodeenum";
import { CertificateValidity } from "./certificatevalidity";
/**
 * Describes a CA certificate.
 */
export declare class CACertificateDescription extends SpeakeasyBase {
    autoRegistrationStatus?: AutoRegistrationStatusEnum;
    certificateArn?: string;
    certificateId?: string;
    certificateMode?: CertificateModeEnum;
    certificatePem?: string;
    creationDate?: Date;
    customerVersion?: number;
    generationId?: string;
    lastModifiedDate?: Date;
    ownedBy?: string;
    status?: CACertificateStatusEnum;
    validity?: CertificateValidity;
}
