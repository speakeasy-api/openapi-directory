import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamGameTeamsStats extends SpeakeasyBase {
    category?: string;
    stat?: string;
}
export declare class TeamGameTeams extends SpeakeasyBase {
    conference?: string;
    homeAway?: string;
    points?: number;
    school?: string;
    stats?: TeamGameTeamsStats[];
}
export declare class TeamGame extends SpeakeasyBase {
    id?: number;
    teams?: TeamGameTeams[];
}
