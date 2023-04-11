import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilesSearch extends SpeakeasyBase {
    /**
     * ID of the drive to filter on
     */
    driveId?: string;
    /**
     * The query to search for. May match across multiple fields.
     */
    query: string;
}
