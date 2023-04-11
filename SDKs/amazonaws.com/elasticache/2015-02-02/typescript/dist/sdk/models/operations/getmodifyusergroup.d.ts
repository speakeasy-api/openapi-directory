import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyUserGroupActionEnum {
    ModifyUserGroup = "ModifyUserGroup"
}
export declare enum GETModifyUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETModifyUserGroupRequest extends SpeakeasyBase {
    action: GETModifyUserGroupActionEnum;
    /**
     * The ID of the user group.
     */
    userGroupId: string;
    /**
     * The list of user IDs to add to the user group.
     */
    userIdsToAdd?: string[];
    /**
     * The list of user IDs to remove from the user group.
     */
    userIdsToRemove?: string[];
    version: GETModifyUserGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyUserGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
