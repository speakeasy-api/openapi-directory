import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomDemographicsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomDemographicsCreateRequest extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomDemographicsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    customPatientFieldType?: shared.CustomPatientFieldType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
