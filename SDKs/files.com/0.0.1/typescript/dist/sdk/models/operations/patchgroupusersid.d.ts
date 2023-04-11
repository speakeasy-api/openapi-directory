import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchGroupUsersIdRequestBody extends SpeakeasyBase {
    /**
     * Is the user a group administrator?
     */
    admin?: boolean;
    /**
     * Group ID to add user to.
     */
    groupId: number;
    /**
     * User ID to add to group.
     */
    userId: number;
}
export declare class PatchGroupUsersIdRequest extends SpeakeasyBase {
    requestBody: PatchGroupUsersIdRequestBody;
    /**
     * Group User ID.
     */
    id: number;
}
export declare class PatchGroupUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The GroupUsers object.
     */
    groupUserEntity?: shared.GroupUserEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
