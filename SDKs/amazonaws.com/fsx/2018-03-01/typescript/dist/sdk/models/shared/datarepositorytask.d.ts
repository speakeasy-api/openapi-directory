import { SpeakeasyBase } from "../../../internal/utils";
import { CompletionReport } from "./completionreport";
import { DataRepositoryTaskFailureDetails } from "./datarepositorytaskfailuredetails";
import { DataRepositoryTaskLifecycleEnum } from "./datarepositorytasklifecycleenum";
import { DataRepositoryTaskStatus } from "./datarepositorytaskstatus";
import { DataRepositoryTaskTypeEnum } from "./datarepositorytasktypeenum";
import { Tag } from "./tag";
/**
 * A description of the data repository task. You use data repository tasks to perform bulk transfer operations between an Amazon FSx for Lustre file system and a linked data repository. An Amazon File Cache resource uses a task to automatically release files from the cache.
 */
export declare class DataRepositoryTask extends SpeakeasyBase {
    capacityToRelease?: number;
    /**
     * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
     */
    creationTime: Date;
    endTime?: Date;
    failureDetails?: DataRepositoryTaskFailureDetails;
    fileCacheId?: string;
    fileSystemId?: string;
    lifecycle: DataRepositoryTaskLifecycleEnum;
    paths?: string[];
    /**
     * Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.
     */
    report?: CompletionReport;
    /**
     * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
     */
    resourceARN?: string;
    startTime?: Date;
    status?: DataRepositoryTaskStatus;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
    taskId: string;
    type: DataRepositoryTaskTypeEnum;
}
