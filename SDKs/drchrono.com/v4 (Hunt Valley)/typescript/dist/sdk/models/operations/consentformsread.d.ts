import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConsentFormsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ConsentFormsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ConsentFormsReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    consentForm?: shared.ConsentForm;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
