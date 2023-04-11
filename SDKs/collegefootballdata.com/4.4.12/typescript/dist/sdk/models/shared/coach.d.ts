import { SpeakeasyBase } from "../../../internal/utils";
export declare class CoachSeasons extends SpeakeasyBase {
    games?: number;
    losses?: number;
    /**
     * Final ranking in the AP poll
     */
    postseasonRank?: number;
    /**
     * Rank in the AP preseason poll
     */
    preseasonRank?: number;
    school?: string;
    /**
     * Final SP+ defensive rating
     */
    spDefense?: number;
    /**
     * Final SP+ offensive rating
     */
    spOffense?: number;
    /**
     * Final overall SP+ rating
     */
    spOverall?: number;
    /**
     * Final SRS rankings
     */
    srs?: number;
    ties?: number;
    wins?: number;
    year?: string;
}
export declare class Coach extends SpeakeasyBase {
    firstName?: string;
    hireDate?: string;
    lastName?: string;
    seasons?: CoachSeasons[];
}
