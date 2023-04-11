import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryScanningConfiguration } from "./repositoryscanningconfiguration";
import { RepositoryScanningConfigurationFailure } from "./repositoryscanningconfigurationfailure";
/**
 * Success
 */
export declare class BatchGetRepositoryScanningConfigurationResponse extends SpeakeasyBase {
    failures?: RepositoryScanningConfigurationFailure[];
    scanningConfigurations?: RepositoryScanningConfiguration[];
}
