import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current status of the export request:
 *
 * @remarks
 *   * `PROCESSING` - Export request has been received by Climate and is being processed.
 *   * `INVALID` - Export request has failed validity check.
 *   * `EXPIRED` - Export contents have expired, and are no longer available for retrieval.
 *   * `COMPLETED` - The export request has been successfully processed, and its contents are available for retrieval.
 *   * `NO_DATA` - The export request completed successfully but generated no data.
 *
 */
export declare enum ExportStatusStatusEnum {
    Processing = "PROCESSING",
    Invalid = "INVALID",
    Expired = "EXPIRED",
    Completed = "COMPLETED",
    NoData = "NO_DATA"
}
/**
 * OK
 */
export declare class ExportStatus extends SpeakeasyBase {
    /**
     * Base64 encoded MD5 hash of the export's contents.
     */
    checksum?: string;
    /**
     * Message indicating reason for validation failure.
     */
    error?: string;
    /**
     * Size of the export's contents in bytes.
     */
    size?: number;
    /**
     * Current status of the export request:
     *
     * @remarks
     *   * `PROCESSING` - Export request has been received by Climate and is being processed.
     *   * `INVALID` - Export request has failed validity check.
     *   * `EXPIRED` - Export contents have expired, and are no longer available for retrieval.
     *   * `COMPLETED` - The export request has been successfully processed, and its contents are available for retrieval.
     *   * `NO_DATA` - The export request completed successfully but generated no data.
     *
     */
    status: ExportStatusStatusEnum;
    /**
     * Token which may be used when executing an identical export in
     *
     * @remarks
     * the future, but which only wants export data which was not
     * previously exported.
     * Assume a given field export request matches 12 fields today. And
     * tomorrow it matches 15 fields. By passing the xNextToken in the
     * definition section of tomorrow's field export request, only the
     * 3 additional fields would be exported. Note, all other parameters
     * passed in the definition section must be identical to the original
     * request.
     *
     */
    xNextToken?: string;
}
