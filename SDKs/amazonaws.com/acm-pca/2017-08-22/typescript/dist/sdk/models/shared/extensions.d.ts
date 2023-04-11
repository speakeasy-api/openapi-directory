import { SpeakeasyBase } from "../../../internal/utils";
import { CustomExtension } from "./customextension";
import { ExtendedKeyUsage } from "./extendedkeyusage";
import { GeneralName } from "./generalname";
import { KeyUsage } from "./keyusage";
import { PolicyInformation } from "./policyinformation";
/**
 * Contains X.509 extension information for a certificate.
 */
export declare class Extensions extends SpeakeasyBase {
    certificatePolicies?: PolicyInformation[];
    customExtensions?: CustomExtension[];
    extendedKeyUsage?: ExtendedKeyUsage[];
    /**
     * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
     */
    keyUsage?: KeyUsage;
    subjectAlternativeNames?: GeneralName[];
}
