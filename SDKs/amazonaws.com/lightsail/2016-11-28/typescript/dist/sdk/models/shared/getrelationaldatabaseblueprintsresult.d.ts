import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseBlueprint } from "./relationaldatabaseblueprint";
/**
 * Success
 */
export declare class GetRelationalDatabaseBlueprintsResult extends SpeakeasyBase {
    blueprints?: RelationalDatabaseBlueprint[];
    nextPageToken?: string;
}
