import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllergiesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AllergiesUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class AllergiesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AllergiesUpdateRequest extends SpeakeasyBase {
    pathParams: AllergiesUpdatePathParams;
    queryParams: AllergiesUpdateQueryParams;
    security: AllergiesUpdateSecurity;
}
export declare class AllergiesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
