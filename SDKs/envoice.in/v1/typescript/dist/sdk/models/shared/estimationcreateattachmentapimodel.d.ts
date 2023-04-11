import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the link (Attached or external)
 */
export declare enum EstimationCreateAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class EstimationCreateAttachmentApiModel extends SpeakeasyBase {
    /**
     * Link to the file
     */
    link?: string;
    /**
     * Hashed file name to avoid url wildguessing
     */
    obfuscatedFileName?: string;
    /**
     * Name of the file
     */
    originalFileName?: string;
    /**
     * File size number in bytes
     */
    size?: number;
    /**
     * Type of the link (Attached or external)
     */
    type?: EstimationCreateAttachmentApiModelTypeEnum;
}
