import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerConfigurationRevisionDescription } from "./workerconfigurationrevisiondescription";
/**
 * Success
 */
export declare class DescribeWorkerConfigurationResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    latestRevision?: WorkerConfigurationRevisionDescription;
    name?: string;
    workerConfigurationArn?: string;
}
