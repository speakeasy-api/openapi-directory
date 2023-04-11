import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvitationClientManagementEnum {
    No = "no",
    Manager = "manager",
    Adn = "adn"
}
export declare enum InvitationCodeMethod3TypeEnum {
    Sms = "SMS"
}
export declare class InvitationCodeMethod3 extends SpeakeasyBase {
    type?: InvitationCodeMethod3TypeEnum;
}
export declare enum InvitationCodeMethod2TypeEnum {
    Payslip = "payslip"
}
export declare class InvitationCodeMethod2 extends SpeakeasyBase {
    month?: string;
    type?: InvitationCodeMethod2TypeEnum;
}
export declare enum InvitationCodeMethod1TypeEnum {
    Manual = "manual"
}
export declare class InvitationCodeMethod1 extends SpeakeasyBase {
    code?: string;
    type?: InvitationCodeMethod1TypeEnum;
}
export declare enum InvitationFoldersRightEnum {
    Read = "read",
    Write = "write"
}
export declare class InvitationFolders extends SpeakeasyBase {
    id?: string;
    name?: string;
    right?: InvitationFoldersRightEnum;
}
export declare class InvitationGroups extends SpeakeasyBase {
    endDate?: string;
    id?: string;
    name?: string;
}
export declare enum InvitationLinkMethodTypeEnum {
    Postal = "Postal",
    Email = "Email"
}
export declare class InvitationLinkMethod extends SpeakeasyBase {
    type?: InvitationLinkMethodTypeEnum;
}
export declare enum InvitationPlayerEnum {
    Guest = "guest",
    Owner = "owner",
    Manager = "manager",
    Assistant = "assistant",
    Collaborator = "collaborator"
}
export declare enum InvitationStatusEnum {
    Sent = "sent",
    Accepted = "accepted",
    Refused = "refused",
    Expired = "expired",
    Finished = "finished",
    WaitingForValidation = "waiting for validation",
    WaitingForPasswordAndUserid = "waiting for password and userid",
    WaitingForLogin = "waiting for login",
    NotSent = "not sent",
    WaitingForInvitation = "waiting for invitation"
}
/**
 * Automatically created
 */
export declare class Invitation extends SpeakeasyBase {
    clientManagement?: InvitationClientManagementEnum;
    codeMethod?: any;
    employeeAccess?: boolean;
    folders?: InvitationFolders[];
    groupIds?: string[];
    groups?: InvitationGroups[];
    isAdmin?: boolean;
    linkMethod?: InvitationLinkMethod;
    player?: InvitationPlayerEnum;
    playerEnd?: string;
    status?: InvitationStatusEnum;
}
