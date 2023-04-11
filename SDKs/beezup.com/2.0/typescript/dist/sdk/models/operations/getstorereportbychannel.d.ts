import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreReportByChannelRequest extends SpeakeasyBase {
    reportByChannelRequest: shared.ReportByChannelRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetStoreReportByChannelResponse extends SpeakeasyBase {
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
    reportByChannelResponse?: shared.ReportByChannelResponse;
}
