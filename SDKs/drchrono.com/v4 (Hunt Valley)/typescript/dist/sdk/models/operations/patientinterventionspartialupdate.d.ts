import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientInterventionsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientInterventionsPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class PatientInterventionsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
