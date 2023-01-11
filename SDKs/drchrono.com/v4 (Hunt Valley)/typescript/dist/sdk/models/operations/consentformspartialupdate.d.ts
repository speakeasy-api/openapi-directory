import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsentFormsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ConsentFormsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ConsentFormsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ConsentFormsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ConsentFormsPartialUpdatePathParams;
    queryParams: ConsentFormsPartialUpdateQueryParams;
    security: ConsentFormsPartialUpdateSecurity;
}
export declare class ConsentFormsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
