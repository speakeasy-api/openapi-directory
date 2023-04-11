import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreReportByDayRequest extends SpeakeasyBase {
    reportByDayRequest: shared.ReportByDayRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetStoreReportByDayResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Your reporting by day
     */
    reportByDayResponse?: shared.ReportByDayResponse;
}
