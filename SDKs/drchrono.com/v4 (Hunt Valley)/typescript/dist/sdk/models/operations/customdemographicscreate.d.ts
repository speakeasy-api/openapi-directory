import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomDemographicsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomDemographicsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomDemographicsCreateRequest extends SpeakeasyBase {
    queryParams: CustomDemographicsCreateQueryParams;
    security: CustomDemographicsCreateSecurity;
}
export declare class CustomDemographicsCreateResponse extends SpeakeasyBase {
    contentType: string;
    customPatientFieldType?: shared.CustomPatientFieldType;
    statusCode: number;
}
