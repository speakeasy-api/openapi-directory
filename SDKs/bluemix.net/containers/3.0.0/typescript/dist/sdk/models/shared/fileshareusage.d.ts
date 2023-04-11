import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileshareUsage extends SpeakeasyBase {
    /**
     * The amount of space that is available in the file share in gigabytes.
     */
    availableSpace?: string;
    /**
     * The total size of the file share in gigabytes.
     */
    totalSpace?: string;
    /**
     * The amount of space that is currently used from the file share.
     */
    usedSpace?: string;
    /**
     * The amount of space that is currently used from the file share in percentage.
     */
    usedSpacePercentage?: string;
}
