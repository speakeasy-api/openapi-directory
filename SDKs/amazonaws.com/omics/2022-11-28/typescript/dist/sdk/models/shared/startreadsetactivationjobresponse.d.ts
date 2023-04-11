import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetActivationJobStatusEnum } from "./readsetactivationjobstatusenum";
/**
 * Success
 */
export declare class StartReadSetActivationJobResponse extends SpeakeasyBase {
    creationTime: Date;
    id: string;
    sequenceStoreId: string;
    status: ReadSetActivationJobStatusEnum;
}
