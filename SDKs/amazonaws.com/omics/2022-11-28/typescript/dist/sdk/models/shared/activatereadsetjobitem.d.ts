import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetActivationJobStatusEnum } from "./readsetactivationjobstatusenum";
/**
 * A read set activation job.
 */
export declare class ActivateReadSetJobItem extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    id: string;
    sequenceStoreId: string;
    status: ReadSetActivationJobStatusEnum;
}
