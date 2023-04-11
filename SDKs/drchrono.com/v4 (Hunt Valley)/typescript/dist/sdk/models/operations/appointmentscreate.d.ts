import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentsCreateRequest extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsCreateResponse extends SpeakeasyBase {
    /**
     * Created
     */
    appointment?: shared.Appointment;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
