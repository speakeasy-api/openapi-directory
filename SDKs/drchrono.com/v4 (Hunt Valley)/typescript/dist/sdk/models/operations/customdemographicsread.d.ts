import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomDemographicsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomDemographicsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomDemographicsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomDemographicsReadRequest extends SpeakeasyBase {
    pathParams: CustomDemographicsReadPathParams;
    queryParams: CustomDemographicsReadQueryParams;
    security: CustomDemographicsReadSecurity;
}
export declare class CustomDemographicsReadResponse extends SpeakeasyBase {
    contentType: string;
    customPatientFieldType?: shared.CustomPatientFieldType;
    statusCode: number;
}
