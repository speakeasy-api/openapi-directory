import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DoctorsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class DoctorsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class DoctorsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    doctor?: shared.Doctor;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
