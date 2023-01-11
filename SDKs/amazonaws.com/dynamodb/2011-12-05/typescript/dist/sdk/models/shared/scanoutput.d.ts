import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { Key } from "./key";
export declare class ScanOutput extends SpeakeasyBase {
    consumedCapacityUnits?: number;
    count?: number;
    items?: Record<string, AttributeValue>[];
    lastEvaluatedKey?: Key;
    scannedCount?: number;
}
