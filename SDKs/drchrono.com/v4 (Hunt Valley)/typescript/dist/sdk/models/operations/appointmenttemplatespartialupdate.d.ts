import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppointmentTemplatesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentTemplatesPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
