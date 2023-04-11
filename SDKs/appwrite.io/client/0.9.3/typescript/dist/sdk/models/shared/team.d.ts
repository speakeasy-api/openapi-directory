import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Team
 */
export declare class Team extends SpeakeasyBase {
    /**
     * Team ID.
     */
    dollarId: string;
    /**
     * Team creation date in Unix timestamp.
     */
    dateCreated: number;
    /**
     * Team name.
     */
    name: string;
    /**
     * Total sum of team members.
     */
    sum: number;
}
