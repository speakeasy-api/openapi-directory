import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppointmentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentsPartialUpdateRequest extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    id: string;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
