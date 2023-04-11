import { SpeakeasyBase } from "../../../internal/utils";
import { OperationEnum } from "./operationenum";
import { OperationStatusEnum } from "./operationstatusenum";
/**
 * The filter criteria to use in determining the requests returned.
 */
export declare class ResourceRequestStatusFilter extends SpeakeasyBase {
    operationStatuses?: OperationStatusEnum[];
    operations?: OperationEnum[];
}
