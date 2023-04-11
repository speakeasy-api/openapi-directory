import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentTemplatesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentTemplatesCreateRequest extends SpeakeasyBase {
    doctor?: number;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesCreateResponse extends SpeakeasyBase {
    /**
     * Created
     */
    appointmentTemplate?: shared.AppointmentTemplate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
