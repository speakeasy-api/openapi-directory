import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterizedStatement } from "./parameterizedstatement";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
export declare class ExecuteTransactionInput extends SpeakeasyBase {
    clientRequestToken?: string;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    transactStatements: ParameterizedStatement[];
}
