import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientPhysicalExamsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPhysicalExamsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientPhysicalExamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientPhysicalExam?: shared.PatientPhysicalExam;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
