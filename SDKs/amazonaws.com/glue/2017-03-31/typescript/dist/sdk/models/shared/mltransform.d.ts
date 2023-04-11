import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationMetrics } from "./evaluationmetrics";
import { GlueTable } from "./gluetable";
import { SchemaColumn } from "./schemacolumn";
import { TransformEncryption } from "./transformencryption";
import { TransformParameters } from "./transformparameters";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { WorkerTypeEnum } from "./workertypeenum";
/**
 * A structure for a machine learning transform.
 */
export declare class MLTransform extends SpeakeasyBase {
    createdOn?: Date;
    description?: string;
    evaluationMetrics?: EvaluationMetrics;
    glueVersion?: string;
    inputRecordTables?: GlueTable[];
    labelCount?: number;
    lastModifiedOn?: Date;
    maxCapacity?: number;
    maxRetries?: number;
    name?: string;
    numberOfWorkers?: number;
    parameters?: TransformParameters;
    role?: string;
    schema?: SchemaColumn[];
    status?: TransformStatusTypeEnum;
    timeout?: number;
    transformEncryption?: TransformEncryption;
    transformId?: string;
    workerType?: WorkerTypeEnum;
}
