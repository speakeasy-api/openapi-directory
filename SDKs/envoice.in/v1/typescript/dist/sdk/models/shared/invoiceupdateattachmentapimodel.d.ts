import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the link (Attached or external)
 */
export declare enum InvoiceUpdateAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class InvoiceUpdateAttachmentApiModel extends SpeakeasyBase {
    /**
     * Id of invoice attachment
     */
    id?: number;
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
    type?: InvoiceUpdateAttachmentApiModelTypeEnum;
}
