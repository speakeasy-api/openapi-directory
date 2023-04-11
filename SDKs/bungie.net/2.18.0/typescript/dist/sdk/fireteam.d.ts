import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * fireteam
 */
export declare class Fireteam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
     */
    fireteamGetActivePrivateClanFireteamCount(req: operations.FireteamGetActivePrivateClanFireteamCountRequest, security: operations.FireteamGetActivePrivateClanFireteamCountSecurity, config?: AxiosRequestConfig): Promise<operations.FireteamGetActivePrivateClanFireteamCountResponse>;
    /**
     * Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
     */
    fireteamGetAvailableClanFireteams(req: operations.FireteamGetAvailableClanFireteamsRequest, security: operations.FireteamGetAvailableClanFireteamsSecurity, config?: AxiosRequestConfig): Promise<operations.FireteamGetAvailableClanFireteamsResponse>;
    /**
     * Gets a specific fireteam.
     */
    fireteamGetClanFireteam(req: operations.FireteamGetClanFireteamRequest, security: operations.FireteamGetClanFireteamSecurity, config?: AxiosRequestConfig): Promise<operations.FireteamGetClanFireteamResponse>;
    /**
     * Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
     */
    fireteamGetMyClanFireteams(req: operations.FireteamGetMyClanFireteamsRequest, security: operations.FireteamGetMyClanFireteamsSecurity, config?: AxiosRequestConfig): Promise<operations.FireteamGetMyClanFireteamsResponse>;
    /**
     * Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
     */
    fireteamSearchPublicAvailableClanFireteams(req: operations.FireteamSearchPublicAvailableClanFireteamsRequest, security: operations.FireteamSearchPublicAvailableClanFireteamsSecurity, config?: AxiosRequestConfig): Promise<operations.FireteamSearchPublicAvailableClanFireteamsResponse>;
}
