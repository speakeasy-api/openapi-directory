import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgsRemovePublicMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsRemovePublicMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
