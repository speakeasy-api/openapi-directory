import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostUsersIdResendWelcomeEmailRequest extends SpeakeasyBase {
    /**
     * User ID.
     */
    id: number;
}
export declare class PostUsersIdResendWelcomeEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
