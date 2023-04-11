import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CallForDocumentClientManagementEnum {
    No = "no",
    Manager = "manager",
    Adn = "adn"
}
export declare enum CallForDocumentPlayerEnum {
    Guest = "guest",
    Owner = "owner",
    Manager = "manager",
    Assistant = "assistant",
    Collaborator = "collaborator"
}
/**
 * Infos to invite
 */
export declare class CallForDocument extends SpeakeasyBase {
    categories?: string[];
    clientManagement?: CallForDocumentClientManagementEnum;
    comment?: string;
    contact?: string;
    isAdmin?: boolean;
    message?: string;
    player?: CallForDocumentPlayerEnum;
    playerEnd?: string;
    signature?: string;
    subject?: string;
}
