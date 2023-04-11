import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">Subject Alternative Name</a> in RFC 5280.
 */
export declare class EdiPartyName extends SpeakeasyBase {
    nameAssigner?: string;
    partyName: string;
}
