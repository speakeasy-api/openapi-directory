import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://personalize-runtime.{region}.amazonaws.com", "https://personalize-runtime.{region}.amazonaws.com", "http://personalize-runtime.{region}.amazonaws.com.cn", "https://personalize-runtime.{region}.amazonaws.com.cn"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getPersonalizedRanking - <p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>
    **/
    getPersonalizedRanking(req: operations.GetPersonalizedRankingRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonalizedRankingResponse>;
    /**
     * getRecommendations - <p>Returns a list of recommended items. The required input depends on the recipe type used to create the solution backing the campaign, as follows:</p> <ul> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> <li> <p>USER_PERSONALIZATION - <code>itemId</code> optional, <code>userId</code> required</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note>
    **/
    getRecommendations(req: operations.GetRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendationsResponse>;
}
