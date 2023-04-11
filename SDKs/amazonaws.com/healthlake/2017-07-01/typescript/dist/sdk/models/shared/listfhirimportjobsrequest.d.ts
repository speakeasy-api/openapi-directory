import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class ListFHIRImportJobsRequest extends SpeakeasyBase {
    datastoreId: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    maxResults?: number;
    nextToken?: string;
    submittedAfter?: Date;
    submittedBefore?: Date;
}
