import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentTemplatesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentTemplatesDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentTemplatesDeleteRequest extends SpeakeasyBase {
    pathParams: AppointmentTemplatesDeletePathParams;
    queryParams: AppointmentTemplatesDeleteQueryParams;
    security: AppointmentTemplatesDeleteSecurity;
}
export declare class AppointmentTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
