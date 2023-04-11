import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can resource be previewed. Property equals `null` if resource `type` is dir.
 */
export declare enum ResourceAttributesPreviewableEnum {
    True = "true",
    False = "false"
}
/**
 * Type of the resource.
 */
export declare enum ResourceAttributesTypeEnum {
    File = "file",
    Dir = "dir"
}
/**
 * Attributes of resource
 */
export declare class ResourceAttributes extends SpeakeasyBase {
    /**
     * Date-time of the time when resource was accessed.
     */
    accessedAt?: Date;
    /**
     * UNIX timestamp of last access
     */
    accessedTime?: number;
    /**
     * Date-time of resource creation.
     */
    createdAt?: Date;
    /**
     * Username of the creator.
     */
    createdBy?: string;
    /**
     * UNIX timestamp of resource creation
     */
    createdTime?: number;
    /**
     * Resource extension. Property exists only if resource `type` is file.
     */
    extension?: string;
    /**
     * Number of files within folder. null if resource type is a file.
     */
    fileCount?: number;
    /**
     * Unique hash of the resource.
     */
    hash?: string;
    /**
     * Resource name, e.g. the name of the file or folder.
     */
    name?: string;
    /**
     * Full path to the resource.
     */
    path?: string;
    /**
     * Can resource be previewed. Property equals `null` if resource `type` is dir.
     */
    previewable?: ResourceAttributesPreviewableEnum;
    /**
     * Resource size in bytes
     */
    size?: number;
    /**
     * Type of the resource.
     */
    type?: ResourceAttributesTypeEnum;
    /**
     * Date-time of resource modification.
     */
    updatedAt?: Date;
    /**
     * UNIX timestamp of resource modification
     */
    updatedTime?: number;
    /**
     * Timestamp of resource upload.
     */
    uploadDate?: Date;
}
