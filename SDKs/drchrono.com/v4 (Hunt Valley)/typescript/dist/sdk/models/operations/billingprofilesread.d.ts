import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingProfilesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class BillingProfilesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class BillingProfilesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class BillingProfilesReadRequest extends SpeakeasyBase {
    pathParams: BillingProfilesReadPathParams;
    queryParams: BillingProfilesReadQueryParams;
    security: BillingProfilesReadSecurity;
}
export declare class BillingProfilesReadResponse extends SpeakeasyBase {
    billingProfile?: shared.BillingProfile;
    contentType: string;
    statusCode: number;
}
