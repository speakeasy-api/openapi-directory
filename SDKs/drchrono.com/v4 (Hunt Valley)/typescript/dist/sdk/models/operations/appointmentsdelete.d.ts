import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppointmentsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentsDeleteRequest extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    id: string;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
