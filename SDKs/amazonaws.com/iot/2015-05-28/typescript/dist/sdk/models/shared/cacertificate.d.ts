import { SpeakeasyBase } from "../../../internal/utils";
import { CACertificateStatusEnum } from "./cacertificatestatusenum";
/**
 * A CA certificate.
 */
export declare class CACertificate extends SpeakeasyBase {
    certificateArn?: string;
    certificateId?: string;
    creationDate?: Date;
    status?: CACertificateStatusEnum;
}
