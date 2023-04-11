import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For files that are in a section, this field describes the section.
 */
export declare class FileSection extends SpeakeasyBase {
    id?: string;
}
export declare class FileInput extends SpeakeasyBase {
    /**
     * Base64-encoded contents of the file. Only set if size <= OP_MAX_INLINE_FILE_SIZE_KB kb and `inline_files` is set to `true`.
     */
    content?: string;
    /**
     * ID of the file
     */
    id?: string;
    /**
     * Name of the file
     */
    name?: string;
    /**
     * For files that are in a section, this field describes the section.
     */
    section?: FileSection;
    /**
     * Size in bytes of the file
     */
    size?: number;
}
/**
 * OK
 */
export declare class File extends SpeakeasyBase {
    /**
     * Base64-encoded contents of the file. Only set if size <= OP_MAX_INLINE_FILE_SIZE_KB kb and `inline_files` is set to `true`.
     */
    content?: string;
    /**
     * Path of the Connect API that can be used to download the contents of this file.
     */
    contentPath?: string;
    /**
     * ID of the file
     */
    id?: string;
    /**
     * Name of the file
     */
    name?: string;
    /**
     * For files that are in a section, this field describes the section.
     */
    section?: FileSection;
    /**
     * Size in bytes of the file
     */
    size?: number;
}
