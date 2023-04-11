import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdPersonsIdInvitationSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdPersonsIdInvitationRequestBodyClientManagementEnum {
    No = "no",
    Manager = "manager",
    Adn = "adn"
}
export declare enum PostSpacesSpaceIdPersonsIdInvitationRequestBodyFoldersRightEnum {
    Read = "read",
    Write = "write"
}
export declare class PostSpacesSpaceIdPersonsIdInvitationRequestBodyFolders extends SpeakeasyBase {
    id?: string;
    right?: PostSpacesSpaceIdPersonsIdInvitationRequestBodyFoldersRightEnum;
}
export declare enum PostSpacesSpaceIdPersonsIdInvitationRequestBodyPlayerEnum {
    Guest = "guest",
    Owner = "owner",
    Manager = "manager",
    Assistant = "assistant",
    Collaborator = "collaborator"
}
/**
 * Invitation to create
 */
export declare class PostSpacesSpaceIdPersonsIdInvitationRequestBody extends SpeakeasyBase {
    clientManagement?: PostSpacesSpaceIdPersonsIdInvitationRequestBodyClientManagementEnum;
    employeeAccess?: boolean;
    folders?: PostSpacesSpaceIdPersonsIdInvitationRequestBodyFolders[];
    groupIds?: string[];
    isAdmin?: boolean;
    player?: PostSpacesSpaceIdPersonsIdInvitationRequestBodyPlayerEnum;
    playerEnd?: string;
}
export declare class PostSpacesSpaceIdPersonsIdInvitationRequest extends SpeakeasyBase {
    /**
     * Invitation to create
     */
    requestBody: PostSpacesSpaceIdPersonsIdInvitationRequestBody;
    /**
     * Id of the person
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of invitation created
 */
export declare class PostSpacesSpaceIdPersonsIdInvitation201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdPersonsIdInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of invitation created
     */
    postSpacesSpaceIdPersonsIdInvitation201ApplicationJSONObject?: PostSpacesSpaceIdPersonsIdInvitation201ApplicationJSON;
}
