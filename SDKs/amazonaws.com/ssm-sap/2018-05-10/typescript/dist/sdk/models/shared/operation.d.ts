import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
/**
 * The operations performed by AWS Systems Manager for SAP.
 */
export declare class Operation extends SpeakeasyBase {
    endTime?: Date;
    id?: string;
    lastUpdatedTime?: Date;
    properties?: Record<string, string>;
    resourceArn?: string;
    resourceId?: string;
    resourceType?: string;
    startTime?: Date;
    status?: OperationStatusEnum;
    statusMessage?: string;
    type?: string;
}
