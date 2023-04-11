import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An export of a codespace. Also, latest export details for a codespace can be fetched with id = latest
 */
export declare class CodespaceExportDetails extends SpeakeasyBase {
    /**
     * Name of the exported branch
     */
    branch?: string;
    /**
     * Completion time of the last export operation
     */
    completedAt?: Date;
    /**
     * Url for fetching export details
     */
    exportUrl?: string;
    /**
     * Web url for the exported branch
     */
    htmlUrl?: string;
    /**
     * Id for the export details
     */
    id?: string;
    /**
     * Git commit SHA of the exported branch
     */
    sha?: string;
    /**
     * State of the latest export
     */
    state?: string;
}
