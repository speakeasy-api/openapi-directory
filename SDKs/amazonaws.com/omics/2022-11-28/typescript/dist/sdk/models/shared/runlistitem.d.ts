import { SpeakeasyBase } from "../../../internal/utils";
import { RunStatusEnum } from "./runstatusenum";
/**
 * A workflow run.
 */
export declare class RunListItem extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    id?: string;
    name?: string;
    priority?: number;
    startTime?: Date;
    status?: RunStatusEnum;
    stopTime?: Date;
    storageCapacity?: number;
    workflowId?: string;
}
