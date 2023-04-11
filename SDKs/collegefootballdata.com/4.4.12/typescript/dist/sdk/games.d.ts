import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Games scores and statistics
 */
export declare class Games {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Advanced box scores
     *
     * @remarks
     * Get advanced box score data
     */
    getAdvancedBoxScore(req: operations.GetAdvancedBoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedBoxScoreResponse>;
    /**
     * Season calendar
     *
     * @remarks
     * Get calendar of weeks by season
     */
    getCalendar(req: operations.GetCalendarRequest, config?: AxiosRequestConfig): Promise<operations.GetCalendarResponse>;
    /**
     * Game media information and schedules
     *
     * @remarks
     * Game media information (TV, radio, etc)
     */
    getGameMedia(req: operations.GetGameMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetGameMediaResponse>;
    /**
     * Game weather information (Patreon only)
     *
     * @remarks
     * Weather information for the hour of kickoff
     */
    getGameWeather(req: operations.GetGameWeatherRequest, config?: AxiosRequestConfig): Promise<operations.GetGameWeatherResponse>;
    /**
     * Games and results
     *
     * @remarks
     * Get game results
     */
    getGames(req: operations.GetGamesRequest, config?: AxiosRequestConfig): Promise<operations.GetGamesResponse>;
    /**
     * Player game stats
     *
     * @remarks
     * Player stats broken down by game
     */
    getPlayerGameStats(req: operations.GetPlayerGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerGameStatsResponse>;
    /**
     * Live game results (Patreon only)
     *
     * @remarks
     * Get live game results
     */
    getScoreboard(req: operations.GetScoreboardRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreboardResponse>;
    /**
     * Team game stats
     *
     * @remarks
     * Team stats broken down by game
     */
    getTeamGameStats(req: operations.GetTeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamGameStatsResponse>;
    /**
     * Team records
     *
     * @remarks
     * Get team records by year
     */
    getTeamRecords(req: operations.GetTeamRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamRecordsResponse>;
}
