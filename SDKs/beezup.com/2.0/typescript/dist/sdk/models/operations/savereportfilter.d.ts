import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveReportFilterRequest extends SpeakeasyBase {
    /**
     * Your report filter identifier
     */
    reportFilterId: string;
    saveReportFilterRequest: shared.SaveReportFilterRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class SaveReportFilterResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
