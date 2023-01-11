import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomDemographicsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomDemographicsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomDemographicsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomDemographicsUpdateRequest extends SpeakeasyBase {
    pathParams: CustomDemographicsUpdatePathParams;
    queryParams: CustomDemographicsUpdateQueryParams;
    security: CustomDemographicsUpdateSecurity;
}
export declare class CustomDemographicsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
