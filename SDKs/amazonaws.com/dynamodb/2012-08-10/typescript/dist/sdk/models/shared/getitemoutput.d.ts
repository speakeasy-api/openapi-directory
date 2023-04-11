import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ConsumedCapacity } from "./consumedcapacity";
/**
 * Represents the output of a <code>GetItem</code> operation.
 */
export declare class GetItemOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity;
    item?: Record<string, AttributeValue>;
}
