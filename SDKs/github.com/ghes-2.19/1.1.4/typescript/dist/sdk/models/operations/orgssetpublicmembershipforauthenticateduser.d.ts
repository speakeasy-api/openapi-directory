import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsSetPublicMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsSetPublicMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
