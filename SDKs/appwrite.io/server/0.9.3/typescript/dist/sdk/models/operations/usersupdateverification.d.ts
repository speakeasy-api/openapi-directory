import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersUpdateVerificationSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersUpdateVerificationRequestBody extends SpeakeasyBase {
    /**
     * User Email Verification Status.
     */
    emailVerification: boolean;
}
export declare class UsersUpdateVerificationRequest extends SpeakeasyBase {
    requestBody?: UsersUpdateVerificationRequestBody;
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersUpdateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
