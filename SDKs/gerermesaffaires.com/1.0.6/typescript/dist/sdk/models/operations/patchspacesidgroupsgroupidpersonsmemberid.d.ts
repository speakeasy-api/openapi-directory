import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchSpacesIdGroupsGroupIdPersonsMemberIdRequest extends SpeakeasyBase {
    /**
     * Id of the group to modify
     */
    groupId: string;
    /**
     * Id of the space
     */
    id: string;
    /**
     * MemberId of the person
     */
    memberId: string;
}
export declare class PatchSpacesIdGroupsGroupIdPersonsMemberIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
