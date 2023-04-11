import { SpeakeasyBase } from "../../../internal/utils";
import { CACertificateDescription } from "./cacertificatedescription";
import { RegistrationConfig } from "./registrationconfig";
/**
 * The output from the DescribeCACertificate operation.
 */
export declare class DescribeCACertificateResponse extends SpeakeasyBase {
    certificateDescription?: CACertificateDescription;
    registrationConfig?: RegistrationConfig;
}
