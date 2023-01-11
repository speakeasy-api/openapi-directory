import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OfficesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OfficesUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class OfficesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class OfficesUpdateRequest extends SpeakeasyBase {
    pathParams: OfficesUpdatePathParams;
    queryParams: OfficesUpdateQueryParams;
    security: OfficesUpdateSecurity;
}
export declare class OfficesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
