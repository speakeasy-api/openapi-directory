import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Describes the API operation.
 */
export declare class Operation extends SpeakeasyBase {
    createdAt?: Date;
    errorCode?: string;
    errorDetails?: string;
    id?: string;
    isTerminal?: boolean;
    location?: ResourceLocation;
    operationDetails?: string;
    operationType?: OperationTypeEnum;
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
    status?: OperationStatusEnum;
    statusChangedAt?: Date;
}
