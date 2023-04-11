import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GuestInSpaceClientManagementEnum {
    No = "no",
    Manager = "manager",
    Adn = "adn"
}
export declare enum GuestInSpaceFoldersRightEnum {
    Read = "read",
    Write = "write"
}
export declare class GuestInSpaceFolders extends SpeakeasyBase {
    id?: string;
    right?: GuestInSpaceFoldersRightEnum;
}
export declare enum GuestInSpacePlayerEnum {
    Guest = "guest",
    Owner = "owner",
    Manager = "manager",
    Assistant = "assistant",
    Collaborator = "collaborator"
}
/**
 * Infos to invite
 */
export declare class GuestInSpace extends SpeakeasyBase {
    clientManagement?: GuestInSpaceClientManagementEnum;
    comment?: string;
    contact?: string;
    folders?: GuestInSpaceFolders[];
    groupIds?: string[];
    isAdmin?: boolean;
    memberId?: string;
    message?: string;
    player?: GuestInSpacePlayerEnum;
    playerEnd?: string;
    signature?: string;
    subject?: string;
}
