import { SpeakeasyBase } from "../../../internal/utils";
export declare class LivePlayByPlayDrivesPlays extends SpeakeasyBase {
    awayScore?: number;
    clock?: string;
    distance?: number;
    down?: number;
    downType?: string;
    epa?: number;
    garbageTime?: boolean;
    homeScore?: number;
    id?: number;
    period?: number;
    playText?: string;
    playType?: string;
    playTypeId?: number;
    rushPass?: string;
    success?: boolean;
    team?: string;
    teamId?: number;
    wallclock?: string;
    yardsGained?: number;
    yardsToGoal?: number;
}
export declare class LivePlayByPlayDrives extends SpeakeasyBase {
    defense?: string;
    defenseId?: number;
    duration?: string;
    endClock?: string;
    endPeriod?: number;
    endYardsToGoal?: number;
    id?: number;
    offense?: string;
    offenseId?: number;
    playCount?: number;
    plays?: LivePlayByPlayDrivesPlays[];
    scoringOpportunity?: boolean;
    startClock?: string;
    startPeriod?: number;
    startYardsToGoal?: number;
    yards?: number;
}
export declare class LivePlayByPlayTeams extends SpeakeasyBase {
    drives?: number;
    epaPerPass?: number;
    epaPerPlay?: number;
    epaPerRush?: number;
    explosiveness?: number;
    homeAway?: string;
    lineYards?: number;
    lineYardsPerRush?: number;
    openFieldYards?: number;
    openFieldYardsPerRush?: number;
    passingDownSuccessRate?: number;
    passingEpa?: number;
    plays?: number;
    points?: number;
    pointsPerOpportunity?: number;
    rushingEpa?: number;
    scoringOpportunities?: number;
    secondLevelYards?: number;
    secondLevelYardsPerRush?: number;
    standardDownSuccessRate?: number;
    successRate?: number;
    team?: string;
    teamId?: number;
    totalEpa?: number;
}
/**
 * successful operation
 */
export declare class LivePlayByPlay extends SpeakeasyBase {
    clock?: string;
    distance?: number;
    down?: number;
    drives?: LivePlayByPlayDrives[];
    id?: number;
    period?: number;
    possession?: string;
    status?: string;
    teams?: LivePlayByPlayTeams[];
    yardsToGoal?: number;
}
