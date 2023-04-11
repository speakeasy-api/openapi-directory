import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SuppressViolationSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class SuppressViolationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
