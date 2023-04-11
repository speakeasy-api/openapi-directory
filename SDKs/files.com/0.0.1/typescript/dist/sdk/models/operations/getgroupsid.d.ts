import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupsIdRequest extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id: number;
}
export declare class GetGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Groups object.
     */
    groupEntity?: shared.GroupEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
