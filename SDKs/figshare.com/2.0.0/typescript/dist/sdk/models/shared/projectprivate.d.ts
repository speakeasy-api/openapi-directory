import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Role inside this project
 */
export declare enum ProjectPrivateRoleEnum {
    Owner = "Owner",
    Collaborator = "Collaborator",
    Viewer = "Viewer"
}
/**
 * Project storage type
 */
export declare enum ProjectPrivateStorageEnum {
    Individual = "individual",
    Group = "group"
}
export declare class ProjectPrivate extends SpeakeasyBase {
    /**
     * Project id
     */
    id: number;
    /**
     * Date when project was published
     */
    publishedDate: string;
    /**
     * Role inside this project
     */
    role: ProjectPrivateRoleEnum;
    /**
     * Project storage type
     */
    storage: ProjectPrivateStorageEnum;
    /**
     * Project title
     */
    title: string;
    /**
     * Api endpoint
     */
    url: string;
}
