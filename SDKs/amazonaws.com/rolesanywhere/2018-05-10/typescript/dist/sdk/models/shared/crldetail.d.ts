import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the certificate revocation list (CRL) after a read or write operation.
 */
export declare class CrlDetail extends SpeakeasyBase {
    createdAt?: Date;
    crlArn?: string;
    crlData?: string;
    crlId?: string;
    enabled?: boolean;
    name?: string;
    trustAnchorArn?: string;
    updatedAt?: Date;
}
