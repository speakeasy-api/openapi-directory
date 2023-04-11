import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomInsurancePlanNamesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomInsurancePlanNamesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    name?: string;
    since?: string;
    user?: number;
}
export declare class CustomInsurancePlanNamesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customInsurancePlanName?: shared.CustomInsurancePlanName;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
