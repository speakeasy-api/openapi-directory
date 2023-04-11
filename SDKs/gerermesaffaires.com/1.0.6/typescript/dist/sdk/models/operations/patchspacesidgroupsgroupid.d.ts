import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Group to modify
 */
export declare class PatchSpacesIdGroupsGroupIdRequestBody extends SpeakeasyBase {
    endDate?: string;
    name?: string;
}
export declare class PatchSpacesIdGroupsGroupIdRequest extends SpeakeasyBase {
    /**
     * Group to modify
     */
    requestBody: PatchSpacesIdGroupsGroupIdRequestBody;
    /**
     * Id of the group to modify
     */
    groupId: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare class PatchSpacesIdGroupsGroupIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
