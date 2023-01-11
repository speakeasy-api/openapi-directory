import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OfficesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OfficesPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class OfficesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class OfficesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: OfficesPartialUpdatePathParams;
    queryParams: OfficesPartialUpdateQueryParams;
    security: OfficesPartialUpdateSecurity;
}
export declare class OfficesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
