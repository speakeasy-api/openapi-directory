import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangePasswordRequestBody extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ChangePasswordRequest extends SpeakeasyBase {
    requestBody?: ChangePasswordRequestBody;
    token: string;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
