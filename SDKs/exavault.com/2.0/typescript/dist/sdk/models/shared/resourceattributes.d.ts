import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResourceAttributesTypeEnum {
    File = "file",
    Dir = "dir"
}
/**
 * Attributes of resource
**/
export declare class ResourceAttributes extends SpeakeasyBase {
    accessedAt?: Date;
    accessedTime?: number;
    createdAt?: Date;
    createdBy?: string;
    createdTime?: number;
    extension?: string;
    fileCount?: number;
    hash?: string;
    name?: string;
    path?: string;
    previewable?: boolean;
    size?: number;
    type?: ResourceAttributesTypeEnum;
    updatedAt?: Date;
    updatedTime?: number;
    uploadDate?: Date;
}
