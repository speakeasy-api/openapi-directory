import { SpeakeasyBase } from "../../../internal/utils";
import { SyncJobStateEnum } from "./syncjobstateenum";
/**
 * Success
 */
export declare class CreateSyncJobResponse extends SpeakeasyBase {
    arn: string;
    creationDateTime: Date;
    state: SyncJobStateEnum;
}
