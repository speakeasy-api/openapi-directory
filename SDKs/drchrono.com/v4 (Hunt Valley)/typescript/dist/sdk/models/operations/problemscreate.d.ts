import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProblemsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class ProblemsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ProblemsCreateRequest extends SpeakeasyBase {
    queryParams: ProblemsCreateQueryParams;
    security: ProblemsCreateSecurity;
}
export declare class ProblemsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientProblem?: shared.PatientProblem;
    statusCode: number;
}
