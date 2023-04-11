import { SpeakeasyBase } from "../../../internal/utils";
import { HsmConfiguration } from "./hsmconfiguration";
/**
 * Success
 */
export declare class CreateHsmConfigurationResult extends SpeakeasyBase {
    /**
     * Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
     */
    hsmConfiguration?: HsmConfiguration;
}
