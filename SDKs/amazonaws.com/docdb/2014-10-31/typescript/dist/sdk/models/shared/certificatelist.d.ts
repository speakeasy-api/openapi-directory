import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A certificate authority (CA) certificate for an account.
**/
export declare class CertificateList extends SpeakeasyBase {
    certificateArn?: string;
    certificateIdentifier?: string;
    certificateType?: string;
    thumbprint?: string;
    validFrom?: Date;
    validTill?: Date;
}
