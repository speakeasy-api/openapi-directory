import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEventlogConfigRequest extends SpeakeasyBase {
    updateEventlogConfig: shared.UpdateEventlogConfig;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateEventlogConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    eventlogConfig?: shared.EventlogConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
