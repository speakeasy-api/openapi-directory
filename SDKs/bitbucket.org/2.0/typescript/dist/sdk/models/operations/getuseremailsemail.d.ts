import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserEmailsEmailSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetUserEmailsEmailRequest extends SpeakeasyBase {
    /**
     * Email address of the user.
     */
    email: string;
}
export declare class GetUserEmailsEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unexpected error.
     */
    error?: Record<string, any>;
}
