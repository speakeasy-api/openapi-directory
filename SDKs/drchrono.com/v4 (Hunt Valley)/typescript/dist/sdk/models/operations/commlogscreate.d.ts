import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CommLogsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CommLogsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class CommLogsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    phoneCallLog?: shared.PhoneCallLog;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
