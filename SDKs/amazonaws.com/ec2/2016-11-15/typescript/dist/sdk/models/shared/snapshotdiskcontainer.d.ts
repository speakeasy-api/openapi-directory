import { SpeakeasyBase } from "../../../internal/utils";
import { UserBucket } from "./userbucket";
/**
 * The disk container object for the import snapshot request.
 */
export declare class SnapshotDiskContainer extends SpeakeasyBase {
    description?: string;
    format?: string;
    url?: string;
    userBucket?: UserBucket;
}
