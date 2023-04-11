import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FollowUpClientManagementEnum {
    Manager = "manager",
    Adn = "adn",
    Null = "null"
}
export declare enum FollowUpInvitationStatusEnum {
    Null = "null",
    On = "on",
    Refused = "refused",
    Accepted = "accepted",
    Finished = "finished",
    Expired = "expired",
    WaitingForValidation = "waiting for validation"
}
export declare class FollowUpInvitation extends SpeakeasyBase {
    comment?: string;
    playerEnd?: string;
    status?: FollowUpInvitationStatusEnum;
}
export declare enum FollowUpLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare enum FollowUpPlayerEnum {
    Guest = "guest",
    Manager = "manager",
    Collaborator = "collaborator",
    Owner = "owner",
    Assistant = "assistant"
}
/**
 * the folder of a person
 */
export declare class FollowUp extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    clientManagement?: FollowUpClientManagementEnum;
    home?: boolean;
    id?: string;
    invitation?: FollowUpInvitation;
    keywords?: string[];
    level?: FollowUpLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    player?: FollowUpPlayerEnum;
}
