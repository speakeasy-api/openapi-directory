import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ModifyCollectClientManagementEnum {
    No = "no",
    Manager = "manager",
    Adn = "adn"
}
export declare enum ModifyCollectPlayerEnum {
    Guest = "guest",
    Owner = "owner",
    Manager = "manager",
    Assistant = "assistant",
    Collaborator = "collaborator"
}
/**
 * Infos to invite
 */
export declare class ModifyCollect extends SpeakeasyBase {
    categories?: string[];
    clientManagement?: ModifyCollectClientManagementEnum;
    isAdmin?: boolean;
    player?: ModifyCollectPlayerEnum;
    playerEnd?: string;
}
