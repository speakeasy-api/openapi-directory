import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppointmentTemplatesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentTemplatesUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
