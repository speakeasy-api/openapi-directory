import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AmendmentsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AmendmentsReadQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    patient?: number;
}
export declare class AmendmentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AmendmentsReadRequest extends SpeakeasyBase {
    pathParams: AmendmentsReadPathParams;
    queryParams: AmendmentsReadQueryParams;
    security: AmendmentsReadSecurity;
}
export declare class AmendmentsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientAmendment?: shared.PatientAmendment;
    statusCode: number;
}
