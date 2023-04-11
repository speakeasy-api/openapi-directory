import { SpeakeasyBase } from "../../../internal/utils";
import { Asn1Subject } from "./asn1subject";
import { EdiPartyName } from "./edipartyname";
import { OtherName } from "./othername";
/**
 * Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.
 */
export declare class GeneralName extends SpeakeasyBase {
    /**
     * Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
     */
    directoryName?: Asn1Subject;
    dnsName?: string;
    ediPartyName?: EdiPartyName;
    ipAddress?: string;
    otherName?: OtherName;
    registeredId?: string;
    rfc822Name?: string;
    uniformResourceIdentifier?: string;
}
