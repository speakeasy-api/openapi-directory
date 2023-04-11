import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesIdFoldersFolderIdPersonsMemberIdRequestBodyGroupsEnum {
    Tax = "tax",
    WealthManagement = "wealth management",
    Social = "social",
    SocialManager = "social manager",
    Purchases = "purchases",
    Sales = "sales",
    Legal = "legal",
    Accounting = "accounting"
}
export declare enum PatchSpacesIdFoldersFolderIdPersonsMemberIdRequestBodyRoleEnum {
    Collaborator = "collaborator",
    Assistant = "assistant",
    Empty = "empty"
}
/**
 * Customer contract to modify
 */
export declare class PatchSpacesIdFoldersFolderIdPersonsMemberIdRequestBody extends SpeakeasyBase {
    groups?: PatchSpacesIdFoldersFolderIdPersonsMemberIdRequestBodyGroupsEnum;
    isAdmin?: boolean;
    role?: PatchSpacesIdFoldersFolderIdPersonsMemberIdRequestBodyRoleEnum;
}
export declare class PatchSpacesIdFoldersFolderIdPersonsMemberIdRequest extends SpeakeasyBase {
    /**
     * Customer contract to modify
     */
    requestBody: PatchSpacesIdFoldersFolderIdPersonsMemberIdRequestBody;
    /**
     * id of the customer folder
     */
    folderId: string;
    /**
     * Id of the space
     */
    id: string;
    /**
     * memberId of the person
     */
    memberId: string;
}
export declare class PatchSpacesIdFoldersFolderIdPersonsMemberIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
