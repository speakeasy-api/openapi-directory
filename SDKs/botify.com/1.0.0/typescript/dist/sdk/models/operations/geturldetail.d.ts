import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUrlDetailRequest extends SpeakeasyBase {
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * comma separated list of fields to return (c.f. URLs Datamodel)
     */
    fields?: string[];
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * (Urlencoded) Searched URL
     */
    url: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetUrlDetailResponse extends SpeakeasyBase {
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
    urlDetail?: Record<string, any>;
}
