import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentTemplatesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentTemplatesUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: AppointmentTemplatesUpdatePathParams;
    queryParams: AppointmentTemplatesUpdateQueryParams;
    security: AppointmentTemplatesUpdateSecurity;
}
export declare class AppointmentTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
