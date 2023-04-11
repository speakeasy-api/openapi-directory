import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetReportRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get Report Response
     */
    getImportationReportResponse?: shared.GetImportationReportResponse;
}
