import { SpeakeasyBase } from "../../../internal/utils";
import { RepositorySyncDefinition } from "./repositorysyncdefinition";
/**
 * Success
 */
export declare class ListRepositorySyncDefinitionsOutput extends SpeakeasyBase {
    nextToken?: string;
    syncDefinitions: RepositorySyncDefinition[];
}
