import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteUserGroupActionEnum {
    DeleteUserGroup = "DeleteUserGroup"
}
export declare enum GETDeleteUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDeleteUserGroupRequest extends SpeakeasyBase {
    action: GETDeleteUserGroupActionEnum;
    /**
     * The ID of the user group.
     */
    userGroupId: string;
    version: GETDeleteUserGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteUserGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
