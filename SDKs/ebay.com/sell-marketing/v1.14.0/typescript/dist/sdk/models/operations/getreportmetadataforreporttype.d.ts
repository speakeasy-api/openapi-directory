import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportMetadataForReportTypeSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetReportMetadataForReportTypeRequest extends SpeakeasyBase {
    /**
     * The name of the report type whose metadata you want to retrieve.<br /><br /><span class="tablenote"><b>Tip:</b> For details about available report types and their descriptions, refer to the <a href="/api-docs/sell/marketing/types/plr:ReportTypeEnum">ReportTypeEnum</a>.</span>
     */
    reportType: string;
}
export declare class GetReportMetadataForReportTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    reportMetadata?: shared.ReportMetadata;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
