import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppointmentTemplatesDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentTemplatesDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
