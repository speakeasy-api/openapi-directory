import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentTemplatesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentTemplatesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    appointmentTemplate?: shared.AppointmentTemplate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
