import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CommLogsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CommLogsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class CommLogsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    phoneCallLog?: shared.PhoneCallLog;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
