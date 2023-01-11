import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
export declare class PutItemOutput extends SpeakeasyBase {
    attributes?: Record<string, AttributeValue>;
    consumedCapacityUnits?: number;
}
