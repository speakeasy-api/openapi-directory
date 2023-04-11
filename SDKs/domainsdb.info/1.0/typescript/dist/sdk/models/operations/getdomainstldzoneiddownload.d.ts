import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDomainsTldZoneIdDownloadRequest extends SpeakeasyBase {
    /**
     * API key
     */
    apiKey?: string;
    /**
     * Request date
     */
    date?: string;
    zoneId: string;
}
export declare class GetDomainsTldZoneIdDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
