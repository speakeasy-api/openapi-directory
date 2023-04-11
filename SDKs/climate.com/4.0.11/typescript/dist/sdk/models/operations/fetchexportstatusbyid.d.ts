import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchExportStatusByIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class FetchExportStatusByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of an Export.
     */
    exportId: string;
}
export declare class FetchExportStatusByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    /**
     * OK
     */
    exportStatus?: shared.ExportStatus;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
