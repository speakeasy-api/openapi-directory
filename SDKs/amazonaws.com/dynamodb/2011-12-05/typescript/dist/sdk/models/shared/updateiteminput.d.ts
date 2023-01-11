import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueUpdate } from "./attributevalueupdate";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { Key } from "./key";
import { ReturnValueEnum } from "./returnvalueenum";
export declare class UpdateItemInput extends SpeakeasyBase {
    attributeUpdates: Record<string, AttributeValueUpdate>;
    expected?: Record<string, ExpectedAttributeValue>;
    key: Key;
    returnValues?: ReturnValueEnum;
    tableName: string;
}
