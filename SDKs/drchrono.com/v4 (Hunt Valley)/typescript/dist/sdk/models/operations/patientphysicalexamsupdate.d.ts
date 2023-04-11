import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientPhysicalExamsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPhysicalExamsUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class PatientPhysicalExamsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
