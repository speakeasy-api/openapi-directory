import { SpeakeasyBase } from "../../../internal/utils";
import { ListOperationsSortAttributeNameEnum } from "./listoperationssortattributenameenum";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";
import { SortOrderEnum } from "./sortorderenum";
/**
 * The ListOperations request includes the following elements.
 */
export declare class ListOperationsRequest extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
    sortBy?: ListOperationsSortAttributeNameEnum;
    sortOrder?: SortOrderEnum;
    status?: OperationStatusEnum[];
    submittedSince?: Date;
    type?: OperationTypeEnum[];
}
