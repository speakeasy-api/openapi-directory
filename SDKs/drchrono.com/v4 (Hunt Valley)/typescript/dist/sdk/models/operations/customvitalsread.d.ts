import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomVitalsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomVitalsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class CustomVitalsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customVitalType?: shared.CustomVitalType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
