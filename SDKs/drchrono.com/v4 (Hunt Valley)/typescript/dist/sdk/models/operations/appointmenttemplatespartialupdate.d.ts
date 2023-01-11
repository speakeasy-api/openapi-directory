import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentTemplatesPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: AppointmentTemplatesPartialUpdatePathParams;
    queryParams: AppointmentTemplatesPartialUpdateQueryParams;
    security: AppointmentTemplatesPartialUpdateSecurity;
}
export declare class AppointmentTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
