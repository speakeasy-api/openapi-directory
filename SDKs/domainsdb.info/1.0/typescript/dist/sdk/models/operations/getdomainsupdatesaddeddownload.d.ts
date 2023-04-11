import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDomainsUpdatesAddedDownloadRequest extends SpeakeasyBase {
    /**
     * API key
     */
    apiKey?: string;
    /**
     * Request date
     */
    date?: string;
}
export declare class GetDomainsUpdatesAddedDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
