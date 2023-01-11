import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsentFormsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class ConsentFormsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ConsentFormsCreateRequest extends SpeakeasyBase {
    queryParams: ConsentFormsCreateQueryParams;
    security: ConsentFormsCreateSecurity;
}
export declare class ConsentFormsCreateResponse extends SpeakeasyBase {
    consentForm?: shared.ConsentForm;
    contentType: string;
    statusCode: number;
}
