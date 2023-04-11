import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateUsernameRequestBody extends SpeakeasyBase {
    newUsername: string;
}
export declare class UpdateUsernameRequest extends SpeakeasyBase {
    requestBody?: UpdateUsernameRequestBody;
    username: string;
}
export declare class UpdateUsernameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
