import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientPhysicalExamsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPhysicalExamsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class PatientPhysicalExamsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientPhysicalExam?: shared.PatientPhysicalExam;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
