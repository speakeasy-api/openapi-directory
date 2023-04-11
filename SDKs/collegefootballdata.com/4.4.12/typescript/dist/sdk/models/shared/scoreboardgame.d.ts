import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScoreboardGameAwayTeam extends SpeakeasyBase {
    classification?: string;
    conference?: string;
    id?: number;
    name?: string;
    points?: number;
}
export declare class ScoreboardGameBetting extends SpeakeasyBase {
    awayMoneyline?: number;
    homeMoneyline?: number;
    overUnder?: number;
    spread?: number;
}
export declare class ScoreboardGameHomeTeam extends SpeakeasyBase {
    classification?: string;
    conference?: string;
    id?: number;
    name?: string;
    points?: number;
}
export declare class ScoreboardGameVenue extends SpeakeasyBase {
    city?: string;
    name?: string;
    state?: string;
}
export declare class ScoreboardGameWeather extends SpeakeasyBase {
    description?: string;
    temperature?: number;
    windDirection?: number;
    windSpeed?: number;
}
export declare class ScoreboardGame extends SpeakeasyBase {
    awayTeam?: ScoreboardGameAwayTeam;
    betting?: ScoreboardGameBetting;
    clock?: string;
    conferenceGame?: boolean;
    homeTeam?: ScoreboardGameHomeTeam;
    id?: number;
    neutralSite?: boolean;
    period?: number;
    possession?: string;
    situation?: string;
    startDate?: string;
    startTimeTBD?: boolean;
    status?: string;
    tv?: string;
    venue?: ScoreboardGameVenue;
    weather?: ScoreboardGameWeather;
}
