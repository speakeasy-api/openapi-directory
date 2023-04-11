import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Information about the DNSSEC key.</p> <p>You get this from your DNS provider and then give it to Route 53 (by using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>) to pass it to the registry to establish the chain of trust.</p>
 */
export declare class DnssecKey extends SpeakeasyBase {
    algorithm?: number;
    digest?: string;
    digestType?: number;
    flags?: number;
    id?: string;
    keyTag?: number;
    publicKey?: string;
}
