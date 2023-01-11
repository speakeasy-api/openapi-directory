import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectPrivateRoleEnum {
    Owner = "Owner",
    Collaborator = "Collaborator",
    Viewer = "Viewer"
}
export declare enum ProjectPrivateStorageEnum {
    Individual = "individual",
    Group = "group"
}
export declare class ProjectPrivate extends SpeakeasyBase {
    id?: number;
    publishedDate?: string;
    role?: ProjectPrivateRoleEnum;
    storage?: ProjectPrivateStorageEnum;
    title?: string;
    url?: string;
}
