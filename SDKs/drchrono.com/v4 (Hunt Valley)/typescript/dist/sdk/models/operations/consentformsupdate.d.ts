import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConsentFormsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ConsentFormsUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ConsentFormsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
