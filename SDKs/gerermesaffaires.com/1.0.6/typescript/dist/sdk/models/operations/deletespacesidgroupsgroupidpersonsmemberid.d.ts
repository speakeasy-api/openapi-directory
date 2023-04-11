import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesIdGroupsGroupIdPersonsMemberIdRequest extends SpeakeasyBase {
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
export declare class DeleteSpacesIdGroupsGroupIdPersonsMemberIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
