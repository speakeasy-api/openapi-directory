import { SpeakeasyBase } from "../../../internal/utils";
import { TransformParameters } from "./transformparameters";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class UpdateMLTransformRequest extends SpeakeasyBase {
    description?: string;
    glueVersion?: string;
    maxCapacity?: number;
    maxRetries?: number;
    name?: string;
    numberOfWorkers?: number;
    parameters?: TransformParameters;
    role?: string;
    timeout?: number;
    transformId: string;
    workerType?: WorkerTypeEnum;
}
