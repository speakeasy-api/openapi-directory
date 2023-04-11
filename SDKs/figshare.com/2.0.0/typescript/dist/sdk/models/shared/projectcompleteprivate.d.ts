import { SpeakeasyBase } from "../../../internal/utils";
import { Collaborator } from "./collaborator";
import { CustomArticleField } from "./customarticlefield";
import { FundingInformation } from "./fundinginformation";
/**
 * Role inside this project
 */
export declare enum ProjectCompletePrivateRoleEnum {
    Owner = "Owner",
    Collaborator = "Collaborator",
    Viewer = "Viewer"
}
/**
 * Project storage type
 */
export declare enum ProjectCompletePrivateStorageEnum {
    Individual = "individual",
    Group = "group"
}
/**
 * OK. Project representation
 */
export declare class ProjectCompletePrivate extends SpeakeasyBase {
    /**
     * ID of the account owning the project
     */
    accountId: number;
    /**
     * List of project collaborators
     */
    collaborators: Collaborator[];
    /**
     * Date when project was created
     */
    createdDate: string;
    /**
     * Collection custom fields
     */
    customFields: CustomArticleField[];
    /**
     * Project description
     */
    description: string;
    /**
     * Project public url
     */
    figshareUrl: string;
    /**
     * Project funding
     */
    funding: string;
    /**
     * Full Project funding information
     */
    fundingList: FundingInformation[];
    /**
     * Group of project if any
     */
    groupId: number;
    /**
     * Project id
     */
    id: number;
    /**
     * Date when project was last modified
     */
    modifiedDate: string;
    /**
     * Date when project was published
     */
    publishedDate: string;
    /**
     * Project quota
     */
    quota: number;
    /**
     * Role inside this project
     */
    role: ProjectCompletePrivateRoleEnum;
    /**
     * Project storage type
     */
    storage: ProjectCompletePrivateStorageEnum;
    /**
     * Project title
     */
    title: string;
    /**
     * Api endpoint
     */
    url: string;
    /**
     * Project used quota
     */
    usedQuota: number;
    /**
     * Project private quota used
     */
    usedQuotaPrivate: number;
    /**
     * Project public quota used
     */
    usedQuotaPublic: number;
}
