import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteGroupsGroupIdMembershipsUserIdRequest extends SpeakeasyBase {
    /**
     * Group ID from which to remove user.
     */
    groupId: number;
    /**
     * User ID to remove from group.
     */
    userId: number;
}
export declare class DeleteGroupsGroupIdMembershipsUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
