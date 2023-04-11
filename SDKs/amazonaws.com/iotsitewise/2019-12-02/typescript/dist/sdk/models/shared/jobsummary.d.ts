import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Contains a job summary information.
 */
export declare class JobSummary extends SpeakeasyBase {
    id: string;
    name: string;
    status: JobStatusEnum;
}
