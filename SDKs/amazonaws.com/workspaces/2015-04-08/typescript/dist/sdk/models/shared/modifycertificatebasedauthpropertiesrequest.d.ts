import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateBasedAuthProperties } from "./certificatebasedauthproperties";
import { DeletableCertificateBasedAuthPropertyEnum } from "./deletablecertificatebasedauthpropertyenum";
export declare class ModifyCertificateBasedAuthPropertiesRequest extends SpeakeasyBase {
    certificateBasedAuthProperties?: CertificateBasedAuthProperties;
    propertiesToDelete?: DeletableCertificateBasedAuthPropertyEnum[];
    resourceId: string;
}
