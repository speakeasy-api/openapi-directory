import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsentFormsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ConsentFormsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ConsentFormsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ConsentFormsUpdateRequest extends SpeakeasyBase {
    pathParams: ConsentFormsUpdatePathParams;
    queryParams: ConsentFormsUpdateQueryParams;
    security: ConsentFormsUpdateSecurity;
}
export declare class ConsentFormsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
