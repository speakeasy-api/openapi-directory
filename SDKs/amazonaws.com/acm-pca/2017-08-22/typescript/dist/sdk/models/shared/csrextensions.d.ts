import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDescription } from "./accessdescription";
import { KeyUsage } from "./keyusage";
/**
 * Describes the certificate extensions to be added to the certificate signing request (CSR).
 */
export declare class CsrExtensions extends SpeakeasyBase {
    keyUsage?: KeyUsage;
    subjectInformationAccess?: AccessDescription[];
}
