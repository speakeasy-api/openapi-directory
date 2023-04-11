import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUrlsExportStatusRequest extends SpeakeasyBase {
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * Url Export ID
     */
    urlExportId: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetUrlsExportStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    csvExportStatus?: shared.CsvExportStatus;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
