import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateTypeEnum } from "./certificatetypeenum";
/**
 * Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>.
 */
export declare class CertificateConfiguration extends SpeakeasyBase {
    certificateType: CertificateTypeEnum;
}
