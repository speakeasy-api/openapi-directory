import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOperator } from "./connectoroperator";
import { TaskTypeEnum } from "./tasktypeenum";
/**
 * A class for modeling different type of tasks. Task implementation varies based on the TaskType.
 */
export declare class Task extends SpeakeasyBase {
    connectorOperator?: ConnectorOperator;
    destinationField?: string;
    sourceFields: string[];
    taskProperties?: Record<string, string>;
    taskType: TaskTypeEnum;
}
