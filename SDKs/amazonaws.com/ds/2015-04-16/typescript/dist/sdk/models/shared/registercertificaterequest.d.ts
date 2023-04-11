import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateTypeEnum } from "./certificatetypeenum";
import { ClientCertAuthSettings } from "./clientcertauthsettings";
export declare class RegisterCertificateRequest extends SpeakeasyBase {
    certificateData: string;
    clientCertAuthSettings?: ClientCertAuthSettings;
    directoryId: string;
    type?: CertificateTypeEnum;
}
