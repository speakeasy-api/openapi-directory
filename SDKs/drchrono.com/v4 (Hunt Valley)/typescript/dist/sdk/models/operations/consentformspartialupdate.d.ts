import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConsentFormsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ConsentFormsPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ConsentFormsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
