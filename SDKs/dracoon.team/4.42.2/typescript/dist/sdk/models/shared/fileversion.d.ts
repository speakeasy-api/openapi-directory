import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List of File Versions
 */
export declare class FileVersion extends SpeakeasyBase {
    deleted?: boolean;
    /**
     * Node ID
     */
    id: number;
    /**
     * Name
     */
    name: string;
    /**
     * Parent node ID (room or folder)
     */
    parentId?: number;
    /**
     * Reference ID. Identical across all versions of a file
     */
    referenceId: number;
}
