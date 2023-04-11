import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchSpacesSpaceIdPersonsIdInvitationSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PatchSpacesSpaceIdPersonsIdInvitationRequestBodyClientManagementEnum {
    No = "no",
    Manager = "manager",
    Adn = "adn"
}
export declare enum PatchSpacesSpaceIdPersonsIdInvitationRequestBodyFoldersRightEnum {
    Read = "read",
    Write = "write"
}
export declare class PatchSpacesSpaceIdPersonsIdInvitationRequestBodyFolders extends SpeakeasyBase {
    id?: string;
    right?: PatchSpacesSpaceIdPersonsIdInvitationRequestBodyFoldersRightEnum;
}
export declare enum PatchSpacesSpaceIdPersonsIdInvitationRequestBodyPlayerEnum {
    Guest = "guest",
    Owner = "owner",
    Manager = "manager",
    Assistant = "assistant",
    Collaborator = "collaborator"
}
/**
 * Invitation to create
 */
export declare class PatchSpacesSpaceIdPersonsIdInvitationRequestBody extends SpeakeasyBase {
    clientManagement?: PatchSpacesSpaceIdPersonsIdInvitationRequestBodyClientManagementEnum;
    employeeAccess?: boolean;
    folders?: PatchSpacesSpaceIdPersonsIdInvitationRequestBodyFolders[];
    groupIds?: string[];
    isAdmin?: boolean;
    player?: PatchSpacesSpaceIdPersonsIdInvitationRequestBodyPlayerEnum;
    playerEnd?: string;
}
export declare class PatchSpacesSpaceIdPersonsIdInvitationRequest extends SpeakeasyBase {
    /**
     * Invitation to create
     */
    requestBody: PatchSpacesSpaceIdPersonsIdInvitationRequestBody;
    /**
     * Id of the person
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdPersonsIdInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
