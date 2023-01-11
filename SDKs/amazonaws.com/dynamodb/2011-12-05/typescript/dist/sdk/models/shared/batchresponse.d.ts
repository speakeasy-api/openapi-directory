import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
export declare class BatchResponse extends SpeakeasyBase {
    consumedCapacityUnits?: number;
    items?: Record<string, AttributeValue>[];
}
