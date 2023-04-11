import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreReportByProductRequest extends SpeakeasyBase {
    reportByProductRequest: shared.ReportByProductRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetStoreReportByProductResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Your reporting by product
     */
    reportByProductResponse?: shared.ReportByProductResponse;
}
