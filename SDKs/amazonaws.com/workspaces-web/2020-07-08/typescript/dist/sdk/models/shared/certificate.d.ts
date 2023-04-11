import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The certificate.
 */
export declare class Certificate extends SpeakeasyBase {
    body?: string;
    issuer?: string;
    notValidAfter?: Date;
    notValidBefore?: Date;
    subject?: string;
    thumbprint?: string;
}
