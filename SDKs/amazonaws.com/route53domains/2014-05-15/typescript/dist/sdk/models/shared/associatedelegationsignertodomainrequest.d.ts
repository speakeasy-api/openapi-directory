import { SpeakeasyBase } from "../../../internal/utils";
import { DnssecSigningAttributes } from "./dnssecsigningattributes";
export declare class AssociateDelegationSignerToDomainRequest extends SpeakeasyBase {
    domainName: string;
    signingAttributes: DnssecSigningAttributes;
}
