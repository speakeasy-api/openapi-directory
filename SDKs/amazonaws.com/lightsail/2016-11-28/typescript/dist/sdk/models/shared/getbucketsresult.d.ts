import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLevelBpaSync } from "./accountlevelbpasync";
import { Bucket } from "./bucket";
/**
 * Success
 */
export declare class GetBucketsResult extends SpeakeasyBase {
    accountLevelBpaSync?: AccountLevelBpaSync;
    buckets?: Bucket[];
    nextPageToken?: string;
}
