import { SpeakeasyBase } from "../../../internal/utils";
import { ScanFrequencyEnum } from "./scanfrequencyenum";
import { ScanningRepositoryFilter } from "./scanningrepositoryfilter";
/**
 * The details of a scanning rule for a private registry.
 */
export declare class RegistryScanningRule extends SpeakeasyBase {
    repositoryFilters: ScanningRepositoryFilter[];
    scanFrequency: ScanFrequencyEnum;
}
