import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomVitalsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomVitalsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomVitalsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomVitalsReadRequest extends SpeakeasyBase {
    pathParams: CustomVitalsReadPathParams;
    queryParams: CustomVitalsReadQueryParams;
    security: CustomVitalsReadSecurity;
}
export declare class CustomVitalsReadResponse extends SpeakeasyBase {
    contentType: string;
    customVitalType?: shared.CustomVitalType;
    statusCode: number;
}
