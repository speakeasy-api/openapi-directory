import { Betting } from "./betting";
import { Coaches } from "./coaches";
import { Conferences } from "./conferences";
import { Draft } from "./draft";
import { Drives } from "./drives";
import { Games } from "./games";
import { Metrics } from "./metrics";
import * as shared from "./models/shared";
import { Players } from "./players";
import { Plays } from "./plays";
import { Rankings } from "./rankings";
import { Ratings } from "./ratings";
import { Recruiting } from "./recruiting";
import { Stats } from "./stats";
import { Teams } from "./teams";
import { Venues } from "./venues";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.collegefootballdata.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with "Bearer " prepended (e.g. "Bearer your_key"). API keys can be acquired from the CollegeFootballData.com website.
 */
export declare class SDK {
    /**
     * Betting lines and data
     */
    betting: Betting;
    /**
     * Information about coaches
     */
    coaches: Coaches;
    /**
     * Conference information
     */
    conferences: Conferences;
    /**
     * NFL Draft data
     */
    draft: Draft;
    /**
     * Drive data
     */
    drives: Drives;
    /**
     * Games scores and statistics
     */
    games: Games;
    /**
     * Data relating to Predicted Points and other metrics
     */
    metrics: Metrics;
    /**
     * Player information and data
     */
    players: Players;
    /**
     * Play by play data
     */
    plays: Plays;
    /**
     * Historical poll rankings
     */
    rankings: Rankings;
    /**
     * Team rating data
     */
    ratings: Ratings;
    /**
     * Recruiting rankings and data
     */
    recruiting: Recruiting;
    /**
     * Statistical data
     */
    stats: Stats;
    /**
     * Team information
     */
    teams: Teams;
    /**
     * Information about venues
     */
    venues: Venues;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
