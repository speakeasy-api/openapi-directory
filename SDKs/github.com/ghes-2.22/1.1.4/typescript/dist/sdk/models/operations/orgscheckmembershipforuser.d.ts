import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgsCheckMembershipForUserRequest extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsCheckMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
