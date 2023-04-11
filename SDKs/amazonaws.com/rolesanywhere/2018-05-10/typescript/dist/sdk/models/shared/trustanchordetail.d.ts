import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * The state of the trust anchor after a read or write operation.
 */
export declare class TrustAnchorDetail extends SpeakeasyBase {
    createdAt?: Date;
    enabled?: boolean;
    name?: string;
    source?: Source;
    trustAnchorArn?: string;
    trustAnchorId?: string;
    updatedAt?: Date;
}
