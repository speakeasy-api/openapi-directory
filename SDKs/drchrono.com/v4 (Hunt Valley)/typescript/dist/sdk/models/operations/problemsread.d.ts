import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProblemsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ProblemsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class ProblemsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ProblemsReadRequest extends SpeakeasyBase {
    pathParams: ProblemsReadPathParams;
    queryParams: ProblemsReadQueryParams;
    security: ProblemsReadSecurity;
}
export declare class ProblemsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientProblem?: shared.PatientProblem;
    statusCode: number;
}
