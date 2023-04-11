import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field that contains a list of disk (local storage) metrics that are associated with the current instance.
 */
export declare class DiskResourceUtilization extends SpeakeasyBase {
    diskReadBytesPerSecond?: string;
    diskReadOpsPerSecond?: string;
    diskWriteBytesPerSecond?: string;
    diskWriteOpsPerSecond?: string;
}
