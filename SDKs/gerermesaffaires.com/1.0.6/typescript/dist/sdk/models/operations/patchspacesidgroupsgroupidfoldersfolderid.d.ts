import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesIdGroupsGroupIdFoldersFolderIdRequestBodyRightEnum {
    Read = "read",
    Write = "write"
}
/**
 * Group to modify to add folder access
 */
export declare class PatchSpacesIdGroupsGroupIdFoldersFolderIdRequestBody extends SpeakeasyBase {
    right: PatchSpacesIdGroupsGroupIdFoldersFolderIdRequestBodyRightEnum;
}
export declare class PatchSpacesIdGroupsGroupIdFoldersFolderIdRequest extends SpeakeasyBase {
    /**
     * Group to modify to add folder access
     */
    requestBody: PatchSpacesIdGroupsGroupIdFoldersFolderIdRequestBody;
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
export declare class PatchSpacesIdGroupsGroupIdFoldersFolderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
