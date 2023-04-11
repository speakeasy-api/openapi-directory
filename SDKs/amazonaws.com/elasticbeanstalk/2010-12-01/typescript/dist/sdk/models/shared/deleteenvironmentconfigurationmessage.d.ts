import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete a draft environment configuration.
 */
export declare class DeleteEnvironmentConfigurationMessage extends SpeakeasyBase {
    applicationName: string;
    environmentName: string;
}
