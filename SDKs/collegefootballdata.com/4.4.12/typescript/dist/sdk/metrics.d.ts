import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Data relating to Predicted Points and other metrics
 */
export declare class Metrics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Team Predicated Points Added (PPA/EPA) by game
     *
     * @remarks
     * Predicted Points Added (PPA) by game
     */
    getGamePPA(req: operations.GetGamePPARequest, config?: AxiosRequestConfig): Promise<operations.GetGamePPAResponse>;
    /**
     * Player Predicated Points Added (PPA/EPA) broken down by game
     *
     * @remarks
     * Predicted Points Added (PPA) by player game
     */
    getPlayerGamePPA(req: operations.GetPlayerGamePPARequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerGamePPAResponse>;
    /**
     * Player Predicated Points Added (PPA/EPA) broken down by season
     *
     * @remarks
     * Predicted Points Added (PPA) by player season
     */
    getPlayerSeasonPPA(req: operations.GetPlayerSeasonPPARequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerSeasonPPAResponse>;
    /**
     * Predicted Points (i.e. Expected Points or EP)
     *
     * @remarks
     * Predicted Points
     */
    getPredictedPoints(req: operations.GetPredictedPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetPredictedPointsResponse>;
    /**
     * Pregame win probability data
     *
     * @remarks
     * Pregame win probabilities
     */
    getPregameWinProbabilities(req: operations.GetPregameWinProbabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetPregameWinProbabilitiesResponse>;
    /**
     * Predicted Points Added (PPA/EPA) data by team
     *
     * @remarks
     * Predicted Points Added (PPA)
     */
    getTeamPPA(req: operations.GetTeamPPARequest, config?: AxiosRequestConfig): Promise<operations.GetTeamPPAResponse>;
    /**
     * Win probability chart data
     *
     * @remarks
     * Win probability data
     */
    getWinProbabilityData(req: operations.GetWinProbabilityDataRequest, config?: AxiosRequestConfig): Promise<operations.GetWinProbabilityDataResponse>;
}
