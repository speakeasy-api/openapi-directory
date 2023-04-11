import { SpeakeasyBase } from "../../../internal/utils";
import { ScanningConfigurationFailureCodeEnum } from "./scanningconfigurationfailurecodeenum";
/**
 * The details about any failures associated with the scanning configuration of a repository.
 */
export declare class RepositoryScanningConfigurationFailure extends SpeakeasyBase {
    failureCode?: ScanningConfigurationFailureCodeEnum;
    failureReason?: string;
    repositoryName?: string;
}
