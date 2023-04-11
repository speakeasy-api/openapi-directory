import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdateUsernameForUserRequestBody extends SpeakeasyBase {
    /**
     * The user's new username.
     */
    login: string;
}
export declare class EnterpriseAdminUpdateUsernameForUserRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminUpdateUsernameForUserRequestBody;
    username: string;
}
/**
 * Response
 */
export declare class EnterpriseAdminUpdateUsernameForUser202ApplicationJSON extends SpeakeasyBase {
    message?: string;
    url?: string;
}
export declare class EnterpriseAdminUpdateUsernameForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseAdminUpdateUsernameForUser202ApplicationJSONObject?: EnterpriseAdminUpdateUsernameForUser202ApplicationJSON;
}
