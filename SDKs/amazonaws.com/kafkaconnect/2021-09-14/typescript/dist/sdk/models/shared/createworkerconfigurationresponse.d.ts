import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerConfigurationRevisionSummary } from "./workerconfigurationrevisionsummary";
/**
 * Success
 */
export declare class CreateWorkerConfigurationResponse extends SpeakeasyBase {
    creationTime?: Date;
    latestRevision?: WorkerConfigurationRevisionSummary;
    name?: string;
    workerConfigurationArn?: string;
}
