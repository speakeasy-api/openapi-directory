import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientPhysicalExamsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPhysicalExamsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
/**
 * Paginated Result
 */
export declare class PatientPhysicalExamsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PatientPhysicalExam[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientPhysicalExamsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientPhysicalExamsList200ApplicationJSONObject?: PatientPhysicalExamsList200ApplicationJSON;
}
