import { SpeakeasyBase } from "../../../internal/utils";
import { KeyLineDefinition } from "./keylinedefinition";
import { PriceLadderDefinition } from "./priceladderdefinition";
import { RunnerDefinition } from "./runnerdefinition";
export declare enum MarketDefinitionBettingTypeEnum {
    Odds = "ODDS",
    Line = "LINE",
    Range = "RANGE",
    AsianHandicapDoubleLine = "ASIAN_HANDICAP_DOUBLE_LINE",
    AsianHandicapSingleLine = "ASIAN_HANDICAP_SINGLE_LINE"
}
export declare enum MarketDefinitionStatusEnum {
    Inactive = "INACTIVE",
    Open = "OPEN",
    Suspended = "SUSPENDED",
    Closed = "CLOSED"
}
export declare class MarketDefinition extends SpeakeasyBase {
    betDelay?: number;
    bettingType?: MarketDefinitionBettingTypeEnum;
    bspMarket?: boolean;
    bspReconciled?: boolean;
    complete?: boolean;
    countryCode?: string;
    crossMatching?: boolean;
    discountAllowed?: boolean;
    eachWayDivisor?: number;
    eventId?: string;
    /**
     * The Event Type the market is contained within.
     */
    eventTypeId?: string;
    inPlay?: boolean;
    keyLineDefinition?: KeyLineDefinition;
    /**
     * For Handicap and Line markets, the lines available on this market will be between the range of lineMinUnit and lineMaxUnit, in increments of the lineInterval value. e.g. If unit is runs, lineMinUnit=10, lineMaxUnit=20 and lineInterval=0.5, then valid lines include 10, 10.5, 11, 11.5 up to 20 runs.
     */
    lineInterval?: number;
    /**
     * For Handicap and Line markets, the maximum value for the outcome, in market units for this market (eg 100 runs).
     */
    lineMaxUnit?: number;
    /**
     * For Handicap and Line markets, the minimum value for the outcome, in market units for this market (eg 0 runs).
     */
    lineMinUnit?: number;
    marketBaseRate?: number;
    marketTime?: Date;
    marketType?: string;
    numberOfActiveRunners?: number;
    numberOfWinners?: number;
    openDate?: Date;
    persistenceEnabled?: boolean;
    priceLadderDefinition?: PriceLadderDefinition;
    raceType?: string;
    /**
     * The market regulators.
     */
    regulators?: string[];
    runners?: RunnerDefinition[];
    runnersVoidable?: boolean;
    settledTime?: Date;
    status?: MarketDefinitionStatusEnum;
    suspendTime?: Date;
    timezone?: string;
    turnInPlayEnabled?: boolean;
    venue?: string;
    version?: number;
}
