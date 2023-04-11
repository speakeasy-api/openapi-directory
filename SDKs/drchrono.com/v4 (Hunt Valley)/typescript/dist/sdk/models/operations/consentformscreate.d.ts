import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConsentFormsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ConsentFormsCreateRequest extends SpeakeasyBase {
    doctor?: number;
}
export declare class ConsentFormsCreateResponse extends SpeakeasyBase {
    /**
     * Created
     */
    consentForm?: shared.ConsentForm;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
