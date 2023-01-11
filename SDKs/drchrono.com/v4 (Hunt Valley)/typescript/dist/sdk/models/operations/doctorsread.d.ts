import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoctorsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DoctorsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class DoctorsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class DoctorsReadRequest extends SpeakeasyBase {
    pathParams: DoctorsReadPathParams;
    queryParams: DoctorsReadQueryParams;
    security: DoctorsReadSecurity;
}
export declare class DoctorsReadResponse extends SpeakeasyBase {
    contentType: string;
    doctor?: shared.Doctor;
    statusCode: number;
}
