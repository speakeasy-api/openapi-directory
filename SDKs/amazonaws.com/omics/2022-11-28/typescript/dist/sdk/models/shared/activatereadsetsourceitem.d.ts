import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetActivationJobItemStatusEnum } from "./readsetactivationjobitemstatusenum";
/**
 * A source for a read set activation job.
 */
export declare class ActivateReadSetSourceItem extends SpeakeasyBase {
    readSetId: string;
    status: ReadSetActivationJobItemStatusEnum;
    statusMessage?: string;
}
