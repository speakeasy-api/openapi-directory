import { SpeakeasyBase } from "../../../internal/utils";
import { RepositorySummary } from "./repositorysummary";
/**
 * Success
 */
export declare class ListRepositoriesOutput extends SpeakeasyBase {
    nextToken?: string;
    repositories: RepositorySummary[];
}
