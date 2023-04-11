import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSyncAttempt } from "./resourcesyncattempt";
import { Revision } from "./revision";
/**
 * Success
 */
export declare class GetTemplateSyncStatusOutput extends SpeakeasyBase {
    desiredState?: Revision;
    latestSuccessfulSync?: ResourceSyncAttempt;
    latestSync?: ResourceSyncAttempt;
}
