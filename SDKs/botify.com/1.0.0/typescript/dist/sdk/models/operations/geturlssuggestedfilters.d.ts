import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUrlsSuggestedFiltersAreaEnum {
    Current = "current",
    New = "new"
}
export declare class GetUrlsSuggestedFiltersRequest extends SpeakeasyBase {
    urlsAggsQuery?: shared.UrlsAggsQuery;
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    area?: GetUrlsSuggestedFiltersAreaEnum;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetUrlsSuggestedFiltersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    urlsAggsQuery?: shared.UrlsAggsQuery;
}
