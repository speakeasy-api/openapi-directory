import { SpeakeasyBase } from "../../../internal/utils";
import { Collaborator } from "./collaborator";
import { FundingInformation } from "./fundinginformation";
export declare enum ProjectCompletePrivateRoleEnum {
    Owner = "Owner",
    Collaborator = "Collaborator",
    Viewer = "Viewer"
}
export declare enum ProjectCompletePrivateStorageEnum {
    Individual = "individual",
    Group = "group"
}
export declare class ProjectCompletePrivate extends SpeakeasyBase {
    collaborators?: Collaborator[];
    createdDate?: string;
    description?: string;
    figshareUrl?: string;
    funding?: string;
    fundingList?: FundingInformation[];
    groupId?: number;
    id?: number;
    modifiedDate?: string;
    publishedDate?: string;
    quota?: number;
    role?: ProjectCompletePrivateRoleEnum;
    storage?: ProjectCompletePrivateStorageEnum;
    title?: string;
    url?: string;
    usedQuota?: number;
    usedQuotaPrivate?: number;
    usedQuotaPublic?: number;
}
