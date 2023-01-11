import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomInsurancePlanNamesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomInsurancePlanNamesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    name?: string;
    since?: string;
    user?: number;
}
export declare class CustomInsurancePlanNamesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomInsurancePlanNamesReadRequest extends SpeakeasyBase {
    pathParams: CustomInsurancePlanNamesReadPathParams;
    queryParams: CustomInsurancePlanNamesReadQueryParams;
    security: CustomInsurancePlanNamesReadSecurity;
}
export declare class CustomInsurancePlanNamesReadResponse extends SpeakeasyBase {
    contentType: string;
    customInsurancePlanName?: shared.CustomInsurancePlanName;
    statusCode: number;
}
