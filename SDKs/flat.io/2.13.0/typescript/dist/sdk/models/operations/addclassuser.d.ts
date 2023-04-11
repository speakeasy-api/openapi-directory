import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddClassUserSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class AddClassUserRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the class
     */
    class: string;
    /**
     * Unique identifier of the user
     */
    user: string;
}
export declare class AddClassUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
