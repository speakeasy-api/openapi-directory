import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsentFormsApplyToAppointmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ConsentFormsApplyToAppointmentQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ConsentFormsApplyToAppointmentSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ConsentFormsApplyToAppointmentRequest extends SpeakeasyBase {
    pathParams: ConsentFormsApplyToAppointmentPathParams;
    queryParams: ConsentFormsApplyToAppointmentQueryParams;
    security: ConsentFormsApplyToAppointmentSecurity;
}
export declare class ConsentFormsApplyToAppointmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
