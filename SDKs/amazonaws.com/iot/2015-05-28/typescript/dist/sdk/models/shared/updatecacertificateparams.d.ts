import { SpeakeasyBase } from "../../../internal/utils";
import { CACertificateUpdateActionEnum } from "./cacertificateupdateactionenum";
/**
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
 */
export declare class UpdateCACertificateParams extends SpeakeasyBase {
    action: CACertificateUpdateActionEnum;
}
