import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllergiesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AllergiesPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class AllergiesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AllergiesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: AllergiesPartialUpdatePathParams;
    queryParams: AllergiesPartialUpdateQueryParams;
    security: AllergiesPartialUpdateSecurity;
}
export declare class AllergiesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
