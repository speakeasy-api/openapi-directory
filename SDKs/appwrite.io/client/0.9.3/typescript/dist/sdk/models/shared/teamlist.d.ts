import { SpeakeasyBase } from "../../../internal/utils";
import { Team } from "./team";
/**
 * Teams List
 */
export declare class TeamList extends SpeakeasyBase {
    /**
     * Total sum of items in the list.
     */
    sum: number;
    /**
     * List of teams.
     */
    teams: Team[];
}
