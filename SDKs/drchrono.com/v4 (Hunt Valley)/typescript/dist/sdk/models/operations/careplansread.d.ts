import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CarePlansReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CarePlansReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
    planType?: number;
}
export declare class CarePlansReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    carePlan?: shared.CarePlan;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
