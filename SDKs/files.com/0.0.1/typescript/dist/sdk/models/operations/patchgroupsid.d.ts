import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchGroupsIdRequestBody extends SpeakeasyBase {
    /**
     * A list of group admin user ids. If sent as a string, should be comma-delimited.
     */
    adminIds?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Group notes.
     */
    notes?: string;
    /**
     * A list of user ids. If sent as a string, should be comma-delimited.
     */
    userIds?: string;
}
export declare class PatchGroupsIdRequest extends SpeakeasyBase {
    requestBody?: PatchGroupsIdRequestBody;
    /**
     * Group ID.
     */
    id: number;
}
export declare class PatchGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Groups object.
     */
    groupEntity?: shared.GroupEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
