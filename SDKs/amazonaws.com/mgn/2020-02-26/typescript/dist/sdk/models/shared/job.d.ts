import { SpeakeasyBase } from "../../../internal/utils";
import { InitiatedByEnum } from "./initiatedbyenum";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
import { ParticipatingServer } from "./participatingserver";
/**
 * Job.
 */
export declare class Job extends SpeakeasyBase {
    arn?: string;
    creationDateTime?: string;
    endDateTime?: string;
    initiatedBy?: InitiatedByEnum;
    jobID: string;
    participatingServers?: ParticipatingServer[];
    status?: JobStatusEnum;
    tags?: Record<string, string>;
    type?: JobTypeEnum;
}
