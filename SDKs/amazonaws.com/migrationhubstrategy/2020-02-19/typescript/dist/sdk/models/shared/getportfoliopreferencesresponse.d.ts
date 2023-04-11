import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { ApplicationPreferences } from "./applicationpreferences";
import { DatabasePreferences } from "./databasepreferences";
import { PrioritizeBusinessGoals } from "./prioritizebusinessgoals";
/**
 * Success
 */
export declare class GetPortfolioPreferencesResponse extends SpeakeasyBase {
    applicationMode?: ApplicationModeEnum;
    applicationPreferences?: ApplicationPreferences;
    databasePreferences?: DatabasePreferences;
    prioritizeBusinessGoals?: PrioritizeBusinessGoals;
}
