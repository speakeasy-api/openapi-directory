import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityStatusEnum } from "./certificateauthoritystatusenum";
import { RevocationConfiguration } from "./revocationconfiguration";
export declare class UpdateCertificateAuthorityRequest extends SpeakeasyBase {
    certificateAuthorityArn: string;
    revocationConfiguration?: RevocationConfiguration;
    status?: CertificateAuthorityStatusEnum;
}
