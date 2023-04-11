import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryFilterTypeEnum } from "./repositoryfiltertypeenum";
/**
 * The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no repository filter is specified, all images in the repository are replicated.
 */
export declare class RepositoryFilter extends SpeakeasyBase {
    filter: string;
    filterType: RepositoryFilterTypeEnum;
}
