import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgsCheckPublicMembershipForUserRequest extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsCheckPublicMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
