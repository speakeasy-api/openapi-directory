import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentsReadRequest extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    id: string;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    appointment?: shared.Appointment;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
