import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConferenceSPRatingDefenseHavoc extends SpeakeasyBase {
    db?: number;
    frontSeven?: number;
    total?: number;
}
export declare class ConferenceSPRatingDefense extends SpeakeasyBase {
    explosiveness?: number;
    havoc?: ConferenceSPRatingDefenseHavoc;
    pasing?: number;
    passingDowns?: number;
    rating?: number;
    rushing?: number;
    standardDowns?: number;
    success?: number;
}
export declare class ConferenceSPRatingOffense extends SpeakeasyBase {
    explosiveness?: number;
    pace?: number;
    passing?: number;
    passingDowns?: number;
    rating?: number;
    runRate?: number;
    rushing?: number;
    standardDowns?: number;
    success?: number;
}
export declare class ConferenceSPRatingSpecialTeams extends SpeakeasyBase {
    rating?: number;
}
export declare class ConferenceSPRating extends SpeakeasyBase {
    conference?: string;
    defense?: ConferenceSPRatingDefense;
    offense?: ConferenceSPRatingOffense;
    rating?: number;
    secondOrderWins?: number;
    sos?: number;
    specialTeams?: ConferenceSPRatingSpecialTeams;
    year?: number;
}
