import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsentFormsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ConsentFormsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ConsentFormsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ConsentFormsReadRequest extends SpeakeasyBase {
    pathParams: ConsentFormsReadPathParams;
    queryParams: ConsentFormsReadQueryParams;
    security: ConsentFormsReadSecurity;
}
export declare class ConsentFormsReadResponse extends SpeakeasyBase {
    consentForm?: shared.ConsentForm;
    contentType: string;
    statusCode: number;
}
