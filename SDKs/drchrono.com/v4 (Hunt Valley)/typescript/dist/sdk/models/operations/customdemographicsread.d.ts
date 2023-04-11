import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomDemographicsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomDemographicsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class CustomDemographicsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customPatientFieldType?: shared.CustomPatientFieldType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
