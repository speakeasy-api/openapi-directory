import { SpeakeasyBase } from "../../../internal/utils";
import { ListenerTlsValidationContextTrust } from "./listenertlsvalidationcontexttrust";
import { SubjectAlternativeNames } from "./subjectalternativenames";
/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context.
 */
export declare class ListenerTlsValidationContext extends SpeakeasyBase {
    subjectAlternativeNames?: SubjectAlternativeNames;
    trust: ListenerTlsValidationContextTrust;
}
