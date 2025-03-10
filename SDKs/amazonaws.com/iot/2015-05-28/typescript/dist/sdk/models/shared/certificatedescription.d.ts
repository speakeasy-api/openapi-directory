import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateModeEnum } from "./certificatemodeenum";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { CertificateValidity } from "./certificatevalidity";
import { TransferData } from "./transferdata";
/**
 * Describes a certificate.
 */
export declare class CertificateDescription extends SpeakeasyBase {
    caCertificateId?: string;
    certificateArn?: string;
    certificateId?: string;
    certificateMode?: CertificateModeEnum;
    certificatePem?: string;
    creationDate?: Date;
    customerVersion?: number;
    generationId?: string;
    lastModifiedDate?: Date;
    ownedBy?: string;
    previousOwnedBy?: string;
    status?: CertificateStatusEnum;
    transferData?: TransferData;
    validity?: CertificateValidity;
}
