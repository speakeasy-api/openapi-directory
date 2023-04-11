import { SpeakeasyBase } from "../../../internal/utils";
import { ActivateReadSetSourceItem } from "./activatereadsetsourceitem";
import { ReadSetActivationJobStatusEnum } from "./readsetactivationjobstatusenum";
/**
 * Success
 */
export declare class GetReadSetActivationJobResponse extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    id: string;
    sequenceStoreId: string;
    sources?: ActivateReadSetSourceItem[];
    status: ReadSetActivationJobStatusEnum;
    statusMessage?: string;
}
