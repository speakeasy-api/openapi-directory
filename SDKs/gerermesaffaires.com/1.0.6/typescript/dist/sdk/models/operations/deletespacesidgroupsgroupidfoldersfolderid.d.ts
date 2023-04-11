import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesIdGroupsGroupIdFoldersFolderIdRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    folderId: string;
    /**
     * Id of the group to modify
     */
    groupId: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare class DeleteSpacesIdGroupsGroupIdFoldersFolderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
