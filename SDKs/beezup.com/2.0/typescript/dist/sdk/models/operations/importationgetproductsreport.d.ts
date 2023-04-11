import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetProductsReportRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    getImportationProductsReportRequest: shared.GetImportationProductsReportRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetProductsReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get Products Report Response
     */
    getImportationProductsReportResponse?: shared.GetImportationProductsReportResponse;
}
