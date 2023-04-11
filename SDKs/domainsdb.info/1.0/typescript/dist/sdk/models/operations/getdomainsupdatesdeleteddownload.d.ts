import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDomainsUpdatesDeletedDownloadRequest extends SpeakeasyBase {
    /**
     * API key
     */
    apiKey?: string;
    /**
     * Request date
     */
    date?: string;
}
export declare class GetDomainsUpdatesDeletedDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
