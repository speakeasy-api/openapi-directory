import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchProfileEmailSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PatchProfileEmailRequestBody2 extends SpeakeasyBase {
    email?: string;
    emailCode?: string;
    smsCode?: string;
}
export declare class PatchProfileEmailRequestBody1 extends SpeakeasyBase {
    email?: string;
}
export declare class PatchProfileEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
