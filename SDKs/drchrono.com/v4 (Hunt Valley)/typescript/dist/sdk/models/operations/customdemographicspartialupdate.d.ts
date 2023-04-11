import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CustomDemographicsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomDemographicsPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class CustomDemographicsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
