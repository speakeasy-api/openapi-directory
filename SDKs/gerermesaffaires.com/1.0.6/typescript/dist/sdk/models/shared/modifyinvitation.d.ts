import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ModifyInvitationClientManagementEnum {
    No = "no",
    Manager = "manager",
    Adn = "adn"
}
export declare enum ModifyInvitationFoldersRightEnum {
    Read = "read",
    Write = "write"
}
export declare class ModifyInvitationFolders extends SpeakeasyBase {
    id?: string;
    right?: ModifyInvitationFoldersRightEnum;
}
export declare enum ModifyInvitationPlayerEnum {
    Guest = "guest",
    Owner = "owner",
    Manager = "manager",
    Assistant = "assistant",
    Collaborator = "collaborator"
}
/**
 * Infos to invite
 */
export declare class ModifyInvitation extends SpeakeasyBase {
    clientManagement?: ModifyInvitationClientManagementEnum;
    folders?: ModifyInvitationFolders[];
    groupIds?: string[];
    isAdmin?: boolean;
    player?: ModifyInvitationPlayerEnum;
    playerEnd?: string;
}
