import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPhysicalExamsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class PatientPhysicalExamsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientPhysicalExamsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientPhysicalExam[];
    next?: string;
    previous?: string;
}
export declare class PatientPhysicalExamsListRequest extends SpeakeasyBase {
    queryParams: PatientPhysicalExamsListQueryParams;
    security: PatientPhysicalExamsListSecurity;
}
export declare class PatientPhysicalExamsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientPhysicalExamsList200ApplicationJSONObject?: PatientPhysicalExamsList200ApplicationJson;
}
