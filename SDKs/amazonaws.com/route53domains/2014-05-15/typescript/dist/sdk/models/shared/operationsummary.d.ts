import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";
import { StatusFlagEnum } from "./statusflagenum";
/**
 * OperationSummary includes the following elements.
 */
export declare class OperationSummary extends SpeakeasyBase {
    domainName?: string;
    lastUpdatedDate?: Date;
    message?: string;
    operationId?: string;
    status?: OperationStatusEnum;
    statusFlag?: StatusFlagEnum;
    submittedDate?: Date;
    type?: OperationTypeEnum;
}
