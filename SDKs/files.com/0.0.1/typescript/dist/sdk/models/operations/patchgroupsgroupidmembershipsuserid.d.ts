import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchGroupsGroupIdMembershipsUserIdRequestBody extends SpeakeasyBase {
    /**
     * Is the user a group administrator?
     */
    admin?: boolean;
}
export declare class PatchGroupsGroupIdMembershipsUserIdRequest extends SpeakeasyBase {
    requestBody?: PatchGroupsGroupIdMembershipsUserIdRequestBody;
    /**
     * Group ID to add user to.
     */
    groupId: number;
    /**
     * User ID to add to group.
     */
    userId: number;
}
export declare class PatchGroupsGroupIdMembershipsUserIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The GroupUsers object.
     */
    groupUserEntity?: shared.GroupUserEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
