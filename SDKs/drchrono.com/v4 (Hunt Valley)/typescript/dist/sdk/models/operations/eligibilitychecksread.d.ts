import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EligibilityChecksReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EligibilityChecksReadQueryParams extends SpeakeasyBase {
    appointment?: number;
    appointmentDate?: string;
    appointmentDateRange?: string;
    doctor?: number;
    patient?: number;
    queryDate?: string;
    queryDateRange?: string;
}
export declare class EligibilityChecksReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class EligibilityChecksReadRequest extends SpeakeasyBase {
    pathParams: EligibilityChecksReadPathParams;
    queryParams: EligibilityChecksReadQueryParams;
    security: EligibilityChecksReadSecurity;
}
export declare class EligibilityChecksReadResponse extends SpeakeasyBase {
    contentType: string;
    coverage?: shared.Coverage;
    statusCode: number;
}
