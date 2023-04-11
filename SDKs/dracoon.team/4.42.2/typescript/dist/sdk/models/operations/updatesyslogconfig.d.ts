import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSyslogConfigRequest extends SpeakeasyBase {
    updateSyslogConfig: shared.UpdateSyslogConfig;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateSyslogConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syslogConfig?: shared.SyslogConfig;
}
