import { SpeakeasyBase } from "../../../internal/utils";
import { GlueTable } from "./gluetable";
import { TransformEncryption } from "./transformencryption";
import { TransformParameters } from "./transformparameters";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class CreateMLTransformRequest extends SpeakeasyBase {
    description?: string;
    glueVersion?: string;
    inputRecordTables: GlueTable[];
    maxCapacity?: number;
    maxRetries?: number;
    name: string;
    numberOfWorkers?: number;
    parameters: TransformParameters;
    role: string;
    tags?: Record<string, string>;
    timeout?: number;
    transformEncryption?: TransformEncryption;
    workerType?: WorkerTypeEnum;
}
