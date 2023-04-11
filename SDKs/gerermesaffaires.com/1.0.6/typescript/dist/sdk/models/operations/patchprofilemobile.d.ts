import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchProfileMobileSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PatchProfileMobileRequestBody2 extends SpeakeasyBase {
    mobile?: string;
    password?: string;
    smsCode?: string;
}
export declare class PatchProfileMobileRequestBody1 extends SpeakeasyBase {
    mobile?: string;
}
export declare class PatchProfileMobileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
