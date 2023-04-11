import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteReportFilterRequest extends SpeakeasyBase {
    /**
     * Your report filter identifier
     */
    reportFilterId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class DeleteReportFilterResponse extends SpeakeasyBase {
    /**
     * This report filter is used by rule. In the error message you will find the rule identifier.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
