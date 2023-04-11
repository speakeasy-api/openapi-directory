import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityUnitsConfiguration } from "./capacityunitsconfiguration";
import { RescoreExecutionPlanStatusEnum } from "./rescoreexecutionplanstatusenum";
/**
 * Success
 */
export declare class DescribeRescoreExecutionPlanResponse extends SpeakeasyBase {
    arn?: string;
    capacityUnits?: CapacityUnitsConfiguration;
    createdAt?: Date;
    description?: string;
    errorMessage?: string;
    id?: string;
    name?: string;
    status?: RescoreExecutionPlanStatusEnum;
    updatedAt?: Date;
}
