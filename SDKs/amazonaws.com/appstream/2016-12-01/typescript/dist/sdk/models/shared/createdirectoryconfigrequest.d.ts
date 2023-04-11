import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateBasedAuthProperties } from "./certificatebasedauthproperties";
import { ServiceAccountCredentials } from "./serviceaccountcredentials";
export declare class CreateDirectoryConfigRequest extends SpeakeasyBase {
    certificateBasedAuthProperties?: CertificateBasedAuthProperties;
    directoryName: string;
    organizationalUnitDistinguishedNames: string[];
    serviceAccountCredentials?: ServiceAccountCredentials;
}
