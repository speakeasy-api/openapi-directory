import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomDemographicsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomDemographicsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomDemographicsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomDemographicsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: CustomDemographicsPartialUpdatePathParams;
    queryParams: CustomDemographicsPartialUpdateQueryParams;
    security: CustomDemographicsPartialUpdateSecurity;
}
export declare class CustomDemographicsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
