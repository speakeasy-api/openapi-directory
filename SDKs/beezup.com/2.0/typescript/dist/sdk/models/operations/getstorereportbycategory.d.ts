import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreReportByCategoryRequest extends SpeakeasyBase {
    reportByCategoryRequest: shared.ReportByCategoryRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetStoreReportByCategoryResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Your reporting by channel
     */
    reportByCategoryResponse?: shared.ReportByCategoryResponse;
}
