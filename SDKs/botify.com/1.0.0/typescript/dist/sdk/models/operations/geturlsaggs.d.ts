import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUrlsAggsAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}
export declare class GetUrlsAggsRequest extends SpeakeasyBase {
    requestBody?: shared.UrlsAggsQuery[];
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    area?: GetUrlsAggsAreaEnum;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetUrlsAggsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getUrlsAggs200ApplicationJSONAnies?: any[];
}
