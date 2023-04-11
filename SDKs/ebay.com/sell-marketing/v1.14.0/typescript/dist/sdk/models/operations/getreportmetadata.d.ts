import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    reportMetadatas?: shared.ReportMetadatas;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
