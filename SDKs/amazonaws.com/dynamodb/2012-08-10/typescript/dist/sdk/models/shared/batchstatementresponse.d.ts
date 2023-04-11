import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { BatchStatementError } from "./batchstatementerror";
/**
 *  A PartiQL batch statement response..
 */
export declare class BatchStatementResponse extends SpeakeasyBase {
    error?: BatchStatementError;
    item?: Record<string, AttributeValue>;
    tableName?: string;
}
