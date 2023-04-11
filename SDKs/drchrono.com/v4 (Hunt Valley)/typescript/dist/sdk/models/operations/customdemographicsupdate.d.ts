import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CustomDemographicsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomDemographicsUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class CustomDemographicsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
