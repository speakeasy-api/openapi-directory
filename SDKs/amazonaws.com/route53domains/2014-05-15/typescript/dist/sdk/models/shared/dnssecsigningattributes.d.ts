import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a delegation signer (DS) record that was created in the registry by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>.
 */
export declare class DnssecSigningAttributes extends SpeakeasyBase {
    algorithm?: number;
    flags?: number;
    publicKey?: string;
}
