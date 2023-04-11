import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSeriesIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetSeriesIdRequest extends SpeakeasyBase {
    /**
     * The ID of the series resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetSeriesId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Series;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetSeriesIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getSeriesId200ApplicationVndApiPlusJsonObject?: GetSeriesId200ApplicationVndApiPlusJson;
}
