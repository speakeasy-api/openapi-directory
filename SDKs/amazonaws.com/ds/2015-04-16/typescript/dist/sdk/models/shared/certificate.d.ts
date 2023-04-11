import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateStateEnum } from "./certificatestateenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
import { ClientCertAuthSettings } from "./clientcertauthsettings";
/**
 * Information about the certificate.
 */
export declare class Certificate extends SpeakeasyBase {
    certificateId?: string;
    clientCertAuthSettings?: ClientCertAuthSettings;
    commonName?: string;
    expiryDateTime?: Date;
    registeredDateTime?: Date;
    state?: CertificateStateEnum;
    stateReason?: string;
    type?: CertificateTypeEnum;
}
