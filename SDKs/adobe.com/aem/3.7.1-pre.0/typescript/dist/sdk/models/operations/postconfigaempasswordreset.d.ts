import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostConfigAemPasswordResetRequest extends SpeakeasyBase {
    pwdresetAuthorizables?: string[];
    pwdresetAuthorizablesAtTypeHint?: string;
}
export declare class PostConfigAemPasswordResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
