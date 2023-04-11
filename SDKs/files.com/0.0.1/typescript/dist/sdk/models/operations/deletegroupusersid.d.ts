import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteGroupUsersIdRequest extends SpeakeasyBase {
    /**
     * Group ID from which to remove user.
     */
    groupId: number;
    /**
     * Group User ID.
     */
    id: number;
    /**
     * User ID to remove from group.
     */
    userId: number;
}
export declare class DeleteGroupUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
