import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CommLogsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CommLogsUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class CommLogsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
