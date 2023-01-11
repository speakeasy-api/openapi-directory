import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsentFormsUnapplyFromAppointmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ConsentFormsUnapplyFromAppointmentQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ConsentFormsUnapplyFromAppointmentSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ConsentFormsUnapplyFromAppointmentRequest extends SpeakeasyBase {
    pathParams: ConsentFormsUnapplyFromAppointmentPathParams;
    queryParams: ConsentFormsUnapplyFromAppointmentQueryParams;
    security: ConsentFormsUnapplyFromAppointmentSecurity;
}
export declare class ConsentFormsUnapplyFromAppointmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
