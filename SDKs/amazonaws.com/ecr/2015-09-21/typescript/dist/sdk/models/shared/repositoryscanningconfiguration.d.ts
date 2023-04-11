import { SpeakeasyBase } from "../../../internal/utils";
import { ScanFrequencyEnum } from "./scanfrequencyenum";
import { ScanningRepositoryFilter } from "./scanningrepositoryfilter";
/**
 * The details of the scanning configuration for a repository.
 */
export declare class RepositoryScanningConfiguration extends SpeakeasyBase {
    appliedScanFilters?: ScanningRepositoryFilter[];
    repositoryArn?: string;
    repositoryName?: string;
    scanFrequency?: ScanFrequencyEnum;
    scanOnPush?: boolean;
}
