import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Analysis context to execute the queries
 */
export declare enum GetProjectUrlsAggsAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new"
}
export declare class GetProjectUrlsAggsRequest extends SpeakeasyBase {
    requestBody?: shared.UrlsAggsQuery[];
    /**
     * Analysis context to execute the queries
     */
    area?: GetProjectUrlsAggsAreaEnum;
    /**
     * Last analysis on the trend
     */
    lastAnalysisSlug?: string;
    /**
     * Max number of analysis to return
     */
    nbAnalyses?: number;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetProjectUrlsAggsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    default?: Record<string, any>;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
