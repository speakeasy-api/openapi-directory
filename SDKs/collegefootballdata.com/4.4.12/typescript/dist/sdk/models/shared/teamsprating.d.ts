import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamSPRatingDefenseHavoc extends SpeakeasyBase {
    db?: number;
    frontSeven?: number;
    total?: number;
}
export declare class TeamSPRatingDefense extends SpeakeasyBase {
    explosiveness?: number;
    havoc?: TeamSPRatingDefenseHavoc;
    pasing?: number;
    passingDowns?: number;
    ranking?: number;
    rating?: number;
    rushing?: number;
    standardDowns?: number;
    success?: number;
}
export declare class TeamSPRatingOffense extends SpeakeasyBase {
    explosiveness?: number;
    pace?: number;
    passing?: number;
    passingDowns?: number;
    ranking?: number;
    rating?: number;
    runRate?: number;
    rushing?: number;
    standardDowns?: number;
    success?: number;
}
export declare class TeamSPRatingSpecialTeams extends SpeakeasyBase {
    rating?: number;
}
export declare class TeamSPRating extends SpeakeasyBase {
    conference?: string;
    defense?: TeamSPRatingDefense;
    offense?: TeamSPRatingOffense;
    ranking?: number;
    rating?: number;
    secondOrderWins?: number;
    sos?: number;
    specialTeams?: TeamSPRatingSpecialTeams;
    team?: string;
    year?: number;
}
