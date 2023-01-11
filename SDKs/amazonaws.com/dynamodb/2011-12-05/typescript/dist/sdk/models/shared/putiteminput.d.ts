import { SpeakeasyBase } from "../../../internal/utils";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnValueEnum } from "./returnvalueenum";
export declare class PutItemInput extends SpeakeasyBase {
    expected?: Record<string, ExpectedAttributeValue>;
    item: Record<string, AttributeValue>;
    returnValues?: ReturnValueEnum;
    tableName: string;
}
