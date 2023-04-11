import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetModel } from "./datasetmodel";
/**
 * Success
 */
export declare class NamespaceMetadata extends SpeakeasyBase {
    datasets?: DatasetModel[];
    extraRepos?: string[];
    namespace?: string;
}
