import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsPostRequest extends SpeakeasyBase {
    /**
     * The body of the group
     */
    apiCoreDtoGroupsGroup: shared.ApiCoreDtoGroupsGroup;
    /**
     * The id of the group
     */
    id: number;
}
export declare class GroupsPostResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
