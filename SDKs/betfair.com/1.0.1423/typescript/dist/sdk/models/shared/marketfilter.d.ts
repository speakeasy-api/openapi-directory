import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MarketFilterBettingTypesEnum {
    Odds = "ODDS",
    Line = "LINE",
    Range = "RANGE",
    AsianHandicapDoubleLine = "ASIAN_HANDICAP_DOUBLE_LINE",
    AsianHandicapSingleLine = "ASIAN_HANDICAP_SINGLE_LINE"
}
export declare class MarketFilter extends SpeakeasyBase {
    bettingTypes?: MarketFilterBettingTypesEnum[];
    bspMarket?: boolean;
    countryCodes?: string[];
    eventIds?: string[];
    eventTypeIds?: string[];
    marketIds?: string[];
    marketTypes?: string[];
    raceTypes?: string[];
    turnInPlayEnabled?: boolean;
    venues?: string[];
}
