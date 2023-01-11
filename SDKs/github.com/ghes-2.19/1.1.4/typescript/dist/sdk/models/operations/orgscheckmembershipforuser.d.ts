import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrgsCheckMembershipForUserPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsCheckMembershipForUserRequest extends SpeakeasyBase {
    pathParams: OrgsCheckMembershipForUserPathParams;
}
export declare class OrgsCheckMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
